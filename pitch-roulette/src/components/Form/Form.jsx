import React from 'react';
import './Form.css';
import dropIcon from '../../img/drop.svg';

const Form = () => {


    return (
        <>
        <div className="registration">
            <div className="container">
                <div className="registration__wrapper">
                <h2 className="registration__title">Sign up</h2>
                <form action="#!" className="form">
                    <div className="form__item">
                        <label htmlFor="name" className="form__label">Business name:</label>
                        <input className="form__input" id="name" type="text"  placeholder="Twitch"/>
                    </div>
                    <div className="form__item">
                        <label htmlFor="entertainment" className="form__label">Select industry to which you <br/> want to pitch</label>
                        <div className="select">
                            <select name="entertainment" id="entertainment" className="form__select" >
                                <option selected disabled hidden>Entertainment</option>
                                <option className="option" value="1">Value 1</option>
                                <option className="option" value="2">Value 2</option>
                                <option className="option" value="3">Value 3</option>
                            </select>
                        </div>
                    </div>
                    <div className="form__item">
                        <label htmlFor="name" className="form__label">Upload your Pitch Deck (optional)</label>
                        <div className="dnd">
                            <span className="dnd__text">Drop your file</span>
                            <img  src={dropIcon} alt="drop icon" />
                        </div>
                        <div className="file">
                            <div className="file__text">Upload</div>
                            <input type="file" />
                        </div>
                    </div>
                    <div className="form__item">
                        <label htmlFor="site" className="form__label">Share your website  (optional)</label>
                        <input className="form__input" id="site" type="text" name="site"  placeholder="https://www.twitch.tv"/>
                    </div>

                    <div className="form__item">
                        <label htmlFor="entertainment" className="form__label">What stage are you in? </label>
                        <div className="select">
                            <select name="entertainment" id="entertainment" className="form__select" >
                                <option selected disabled hidden>MVP</option>
                                <option className="option" value="1">Value 1</option>
                                <option className="option" value="2">Value 2</option>
                                <option className="option" value="3">Value 3</option>
                            </select>
                        </div>
                    </div>
                    <div className="form__item">
                        <label htmlFor="name" className="form__label">Upload your Pitch Deck (optional)</label>
                        <div className="dnd">
                            <span className="dnd__text">Drop your file</span>
                            <img  src={dropIcon} alt="drop icon" />
                        </div>
                        <div className="file">
                            <div className="file__text">Upload</div>
                            <input type="file" />
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