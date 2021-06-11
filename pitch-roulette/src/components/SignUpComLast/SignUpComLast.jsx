import React, { useState } from 'react';
import '../Form/Form.css';
import Сongratulations from '../Сongratulations/Сongratulations'
import dropIcon from '../../img/drop.svg';
import fileImg from '../../img/file.svg';
import deleteFile from '../../img/remove-file.svg';

const SignUpComLast = ({ data: dataform, industriesData }) => {
    // для окна с поздравлениями
    const [isOver, setIsOver] = useState(false)

    // state для input
    const [profission, setProfission] = useState('');
    const [username, setUsername] = useState('');

    // DnD c презентацией
    const [profile, setProfile] = useState([]);
    const [drag, setDrag] = useState(false)

    // изменение input
    const changeInput = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'profission':
                setProfission(value);
                break;
            case 'username':
                setUsername(value);
                break;
            default:
                break;
        }
    }

    // выбор файла Presentation через input type=file
    const changeFile = e => {
        setProfile(e.target.files)
    }

    // при перетаскивании файла на DnD меняем state который влияет на стили
    const dragStartHandler = e => {
        e.preventDefault();
        const target = e.target.closest('.dnd');

        if (target) {
            const data = target.dataset.drag;

            switch (data) {
                case 'presentation':
                    setDrag(true)
                    break;
                default:
                    break;
            }
        }
    }

    // при уходе файла с DnD меняем state который влияет на стили
    const dragLeaveHandler = e => {
        e.preventDefault();
        const target = e.target.closest('.dnd');


        if (target) {
            const data = target.dataset.drag;

            switch (data) {
                case 'presentation':
                    setDrag(false)
                    break;
                default:
                    break;
            }
        }
    }

    // отпустили файл над областью DnD
    const onDropHandler = e => {
        e.preventDefault();
        let files = [...e.dataTransfer.files];
        setProfile(files)
    }
    // удаление файла с презентацией
    const removeFile = () => {
        setProfile([]);
        setDrag(false);
    }

    // отправка формы
    const onSubmit = e => {
        e.preventDefault()
        // получаем данные полей
        const formData = new FormData(e.target);
        // добавляем в объект файлы с презинтацией и профайлом
        formData.append('present', profile[0]);
        formData.append('industriesData', industriesData);

        for (let key in dataform) {
            formData.append(key, dataform[key])
        }

        // отправляем данные на серв
        fetch('someApi.php', {
            method: 'POST',
            body: formData
        })

        // сбрасываем форму
        setProfission('');
        setUsername('');
        setProfile([]);
        setDrag(false);
        // показываем сообщение с подравляшками
        setIsOver(true)
    }



    return (
        <>

            {
                isOver ?
                    <Сongratulations path="/business/dushboard"/>
                    :
                    <div className="registration">
                    <div className="container">
                        <div className="registration__wrapper">
                            <h2 className="registration__title">Sign up</h2>
                            <form action="#!" className="form" onSubmit={onSubmit} autoComplete="off">
    
                                <div className="form__item">
                                    <label className="form__label">Who are you?</label>
                                    <input className="form__input" id="site" type="text" name="profission" value={profission} onChange={changeInput} placeholder="Developer" required />
                                </div>
    
                                <div className="form__item">
                                    <label htmlFor="site" className="form__label">Username</label>
                                    <input className="form__input" id="site" type="text" name="username" value={username} onChange={changeInput} placeholder="@dog" required />
                                </div>
    
                                <div className="form__item">
                                    <label className="form__label">Profile Image</label>
                                    {
                                        profile.length ?
    
                                            <div className="file-item">
                                                <div className="file-item__info">
                                                    <div className="file-item__img">
                                                        <img src={fileImg} alt="file icon" />
                                                    </div>
                                                    <span className="file-item__name">{profile[0].name}</span>
                                                </div>
                                                <button className="file-item__delete" onClick={removeFile}>
                                                    <img src={deleteFile} alt="remove icon" />
                                                </button>
                                            </div>
    
    
                                            : <div data-drag="presentation" className={`dnd ${!drag ? "" : "dnd__active"}  `} onDrop={e => onDropHandler(e)} onDragStart={e => { dragStartHandler(e) }} onDragLeave={e => { dragLeaveHandler(e) }} onDragOver={e => { dragStartHandler(e) }}>
                                                <span className="dnd__text">Drop your file</span>
                                                <img src={dropIcon} alt="drop icon" />
                                            </div>
                                    }
                                    <div className="file">
                                        <div className="file__text">Upload</div>
                                        <input type="file" onChange={changeFile} />
                                    </div>
                                </div>
    
                                <button className="form__btn">Continue</button>
                            </form>
                        </div>
                    </div>
                </div>
            }
            

        </>
    )
}

export default SignUpComLast;