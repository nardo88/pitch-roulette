import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Form/Form.css';

const FormSignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPasword] = useState('');

    // отправка формы
    const onSubmit = e => {
        e.preventDefault()
        // получаем данные полей
        const formData = new FormData(e.target);

        // отправляем данные на серв
        fetch('someApi.php', {
            method: 'POST',
            body: formData
        })

        setEmail('');
        setPasword('');
    }

    const changeInput = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPasword(value);
                break;
            default:
                break;
        }
    }


    return (
        <>
            <div className="registration">
                <div className="container">
                    <div className="registration__wrapper">
                        <h2 className="registration__title">Sign in</h2>

                        <form action="#!" className="form" onSubmit={onSubmit} autoComplete="off">
                            <div className="form__item">
                                <label htmlFor="email" className="form__label">Business e-mail:</label>
                                <input className="form__input" name="email" id="email" type="email" value={email} onChange={changeInput} placeholder="Your mail" required />
                            </div>


                            <div className="form__item">
                                <label htmlFor="password" className="form__label">Password:</label>
                                <input className="form__input" id="password" type="password" name="password" value={password} onChange={changeInput} placeholder="Your password" required />
                            </div>

                            <div className="form__btn-wrapper">
                                <button className="form__btn form__btn--two">Sign in</button>
                                <Link className="form__btn form__btn--two form__btn--transparent" to="/sign_up_step_1">Register</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}

export default FormSignIn;