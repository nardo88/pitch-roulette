import React, { useState } from 'react';
import './Form.css';
import dropIcon from '../../img/drop.svg';
import fileImg from '../../img/file.svg';
import deleteFile from '../../img/remove-file.svg';

const Form = () => {



    const [name, setName] = useState('');
    const [site, setSite] = useState('');
    const [entertainment, setEntertainment] = useState(1);
    const [stage, setStage] = useState(1);

    // DnD c презентацией
    const [presentation, setPresentation] = useState([]);
    const [drag, setDrag] = useState(false)

    // DnD для Profile 
    const [profile, setProfile] = useState([]);
    const [dragProfile, setDragProfile] = useState(false)

    // изменение input
    const changeInput = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'site':
                setSite(value);
                break;
            default:
                break;
        }
    }
    // изменение select
    const changeSelect = e => {
        const { name, value } = e.target;

        switch (name) {
            case 'entertainment':
                setEntertainment(value)
                break;
            case 'stage':
                setStage(value);
                break;
            default:
                break;
        }
    }
    // выбор файла Presentation через input type=file
    const changeFile = e => {
        setPresentation(e.target.files)
    }

    // выбор файла Profile через input type=file
    const changeFileProfile = e => {
        setProfile(e.target.files)
    }
    // при перетаскивании файла на DnD меняем state который влияет на стили
    const dragStartHandler = e => {
        e.preventDefault();
        const target = e.target.closest('.dnd');

        if (target){
            const data = target.dataset.drag;

            switch (data) {
                case 'presentation':
                    setDrag(true)
                    break;
            
                case 'profile':
                    setDragProfile(true)
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


        if (target){
            const data = target.dataset.drag;

            switch (data) {
                case 'presentation':
                    setDrag(false)
                    break;
            
                case 'profile':
                    setDragProfile(false)
                    break;
            
                default:
                    break;
            }
        }
    }

    // отпустили файл над областью DnD
    const onDropHandler = e => {
        e.preventDefault();

        const target = e.target.closest('.dnd');

        if (target){
            const data = target.dataset.drag;
            switch (data) {
                case 'presentation':
                    let files = [...e.dataTransfer.files];
                    setPresentation(files)
                    break;
            
                case 'profile':
                    let files1 = [...e.dataTransfer.files];
                    setProfile(files1)
                    break;
            
                default:
                    break;
            }
        }

        
    }
    // удаление файла с презентацией
    const removeFile = () => {
        setPresentation([]);
        setDrag(false);
    }
    // удаление файла с профайлом
    const removeFileProfile = () => {
        setProfile([]);
        setDragProfile(false);
    }
    // отправка формы
    const onSubmit = e => {
        e.preventDefault()
        // получаем данные полей
        const formData = new FormData(e.target);
        // добавляем в объект файлы с презинтацией и профайлом
        formData.append('present', presentation[0]);
        formData.append('profile', profile[0]);

        
        // отправляем данные на серв
        fetch('someApi.php', {
            method: 'POST',
            body: formData
        })

        e.target.reset();
    }


  
    return (
        <>
            <div className="registration">
                <div className="container">
                    <div className="registration__wrapper">
                        <h2 className="registration__title">Sign up</h2>
                        <form action="#!" className="form" onSubmit={onSubmit} autoComplete="off">
                            <div className="form__item">
                                <label htmlFor="name" className="form__label">Business name:</label>
                                <input className="form__input" name="name" id="name" type="text" value={name} onChange={changeInput} placeholder="Twitch" />
                            </div>
                            <div className="form__item">
                                <label className="form__label">Select industry to which you <br /> want to pitch</label>
                                <div className="select">
                                    <select name="entertainment" id="entertainment" value={entertainment} onChange={changeSelect} className="form__select" >
                                        <option value="1">Entertainment</option>
                                        <option value="2">Value 2</option>
                                        <option value="3">Value 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form__item">
                                <label className="form__label">Upload your Pitch Deck (optional)</label>
                                {
                                    presentation.length ?

                                    <div className="file-item">
                                        <div className="file-item__info">
                                            <div className="file-item__img">
                                                <img src={fileImg} alt="file icon" />
                                            </div>
                                            <span className="file-item__name">{presentation[0].name }</span>
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
                            <div className="form__item">
                                <label htmlFor="site" className="form__label">Share your website  (optional)</label>
                                <input className="form__input" id="site" type="text" name="site" value={site} onChange={changeInput} placeholder="https://www.twitch.tv" />
                            </div>

                            <div className="form__item">
                                <label className="form__label">What stage are you in? </label>
                                <div className="select">
                                    <select name="stage" id="stage" className="form__select" value={stage} onChange={changeSelect} >
                                        <option value="1">MVP</option>
                                        <option value="2">Value 2</option>
                                        <option value="3">Value 3</option>
                                    </select>
                                </div>
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
                                            <span className="file-item__name">{profile[0].name }</span>
                                        </div>
                                        <button className="file-item__delete" onClick={removeFileProfile}>
                                            <img src={deleteFile} alt="remove icon" />
                                        </button>
                                    </div>


                                    : <div data-drag="profile" className={`dnd ${!dragProfile ? "" : "dnd__active"}  `} onDrop={e => onDropHandler(e)} onDragStart={e => { dragStartHandler(e) }} onDragLeave={e => { dragLeaveHandler(e) }} onDragOver={e => { dragStartHandler(e) }}>
                                        <span className="dnd__text">Drop your file</span>
                                        <img src={dropIcon} alt="drop icon" />
                                    </div>
                                }
                              
                                <div className="file">
                                    <div className="file__text">Upload</div>
                                    <input type="file" onChange={changeFileProfile} />
                                </div>
                            </div>
                            <button className="form__btn">Continue</button>

                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Form;