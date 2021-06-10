import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import '../Form/Form.css';

const FormSignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPasword] = useState('');
    const [passwordRepeat, setRasswordRepeat] = useState('');

    // для редиректа
    const [redirect, setRedirect] = useState(true);

    // отправка формы
    const onSubmitForm = e => {
        e.preventDefault();
        

        // если все ок редиректим на следующий этап
        setRedirect(false)
    }

    const changeInput = e => {
        const { id, value } = e.target;
        switch (id) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPasword(value);
                break;
            case 'passwordRepeat':
                setRasswordRepeat(value);
                break;
            default:
                break;
        }
    }


    return (
        <>
            {

            redirect ? 
            <div className="registration">
                <div className="container">
                    <div className="registration__wrapper">

                        <h2 className="registration__title">Sign up</h2>
                        <form action="#!" className="form" autoComplete="off" onSubmit={onSubmitForm}>
                            <div className="form__item">
                                <label htmlFor="email" className="form__label">Business e-mail:</label>
                                <input className="form__input" name="email" id="email" type="email" value={email} onChange={changeInput} placeholder="Your mail"  required/>
                            </div>


                            <div className="form__item">
                                <label htmlFor="password" className="form__label">Password:</label>
                                <input className="form__input" id="password" type="password" name="password" value={password} onChange={changeInput} placeholder="Your password"  required/>
                            </div>

                            <div className="form__item">
                                <label htmlFor="passwordRepeat" className="form__label">Repeat password:</label>
                                <input className="form__input" id="passwordRepeat" type="password" value={passwordRepeat} onChange={changeInput} placeholder="Your password" required />
                            </div>


                            <div className="form__btn-wrapper">
                                <Link className="form__btn form__btn--two form__btn--transparent" to="/">Sign in</Link>
                                <button className="form__btn form__btn--two ">Register</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

            : 

            <Redirect push to="/sign_up_step_2" />
            
            }



        </>
    )
}

export default FormSignUp;