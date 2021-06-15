import React, {useState} from 'react';
import './Settings.css';
import DropDownDushboard from '../../DropDown/DropDownDushboard';
import file from '../../../img/settings/file.svg';

const Settings = () => {
    // массив для dropDown
    const industry = ['Art', 'Marketing', 'Ecommerce', 'Education', 'Entertainment', 'Events', 'Fashion', 'Finance', 'Fitness and health', 'Gaming', 'Info technology', 'IOT', 'Logistics', 'Manufacturing', 'Media', 'Mobile Apps', 'Platforms', 'Restaurants', 'Real Estate', 'Retail', 'Service', 'Sports', 'Travel', 'Crypto'];

    

    // email
    const [email, setEmail] = useState({canChangeEmail: false, value: 'mail@mail.ru'})
    const changeEmail = e => {
        setEmail({canChangeEmail: true, value: e.target.value})
    }
    const saveMail = () => {
        setEmail({canChangeEmail: false, value: email.value})
    }

    // Industry
    const [selected, setSelected] = useState('Entertainment');
    const [canChangeIndustry, setCanChangeIndustry] = useState(false)
    const saveIndustry = () => {
        setCanChangeIndustry(false)
    }

    // Password
    const [password, setPassword] = useState('');
    const [canChangePassword, setCanChangePassword] = useState(false);
    const savePassword = () => {
        setCanChangePassword(false)
    }

    // Website
    const [website, setWebsite] = useState('www.jetex.com');
    const [canChangeWebsite, setCanChangeWebsite] = useState(false);
    const saveWebsite = () => {
        setCanChangeWebsite(false)
    }

    // Business name
    const [name, setName] = useState('Jetex')
    const [canChangeName, setCanChangeName] = useState(false);
    const saveName = () => {
        setCanChangeName(false)
    }

    return (
        <>
            <div className="settings">
                <div className="settings__header">
                    <h2 className="settings__title">Settings</h2>
                </div>

                <div className="settings__body">
                    <div className="settings__form settings-form">
                        <div className="settings-form__item">
                            <label htmlFor="" className="settings-form__label">E-mail:</label>
                            {
                                email.canChangeEmail ? <span className="settings-form__edit" onClick={saveMail} >Save</span>
                                    : <span className="settings-form__edit" onClick={() => {setEmail({canChangeEmail: true, value: email.value})}}>Edit</span>
                            }
                            
                            {
                                email.canChangeEmail ?  <input type="email" className="settings-form__input"  placeholder="E-mail" value={email.value} onChange={changeEmail}/>
                               : <div className="settings-form__item-value" >{email.value}</div>
                            }
                        </div>

                        <div className="settings-form__item">
                            <label htmlFor="" className="settings-form__label">Industry:</label>
                            {
                                !canChangeIndustry ? <span className="settings-form__edit" onClick={() => setCanChangeIndustry(true)}>Edit</span>
                                    : <span className="settings-form__edit" onClick={saveIndustry}>Save</span>
                            }
                            

                            {
                                canChangeIndustry ? <DropDownDushboard items={industry} selected={selected} setSelected={setSelected} />
                                    :  <div className="settings-form__item-value" >{selected}</div>
                            }
                            
                            
                        </div>

                        <div className="settings-form__item">
                            <label htmlFor="" className="settings-form__label">Password:</label>
                            
                            {
                                canChangePassword ? <span className="settings-form__edit" onClick={savePassword} >Save</span>
                                    : <span className="settings-form__edit" onClick={() => setCanChangePassword(true)}>Edit</span>
                            }

                            {
                                canChangePassword ? <input type="password" className="settings-form__input" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                                    : <div className="settings-form__item-value">Your password</div>
                            }
                            
                        </div>

                        <div className="settings-form__item">
                            <label htmlFor="" className="settings-form__label">Website:</label>

                            {
                                canChangeWebsite ? <span className="settings-form__edit" onClick={saveWebsite}>Save</span>
                                    : <span className="settings-form__edit" onClick={() => setCanChangeWebsite(true)}>Edit</span>
                            }
                            

                            {
                                canChangeWebsite ?
                                 <input type="text" className="settings-form__input" placeholder="Website" value={website} onChange={e => setWebsite(e.target.value)} />
                                 : <div className="settings-form__item-value">{website}</div>
                            }
                            
                        </div>

                        <div className="settings-form__item">
                            <label htmlFor="" className="settings-form__label">Business name:</label>
                            

                            {
                                canChangeName ? <span className="settings-form__edit" onClick={saveName}>Save</span>
                                    : <span className="settings-form__edit" onClick={() => setCanChangeName(true)}>Edit</span>
                            }

                            {
                                 canChangeName ?
                                 <input type="text" className="settings-form__input" placeholder="Business name" value={name} onChange={e => setName(e.target.value)} />
                                 : <div className="settings-form__item-value">{name}</div>
                            }
                            
                            
                        </div>

                        <div className="settings-form__item">
                            <label htmlFor="" className="settings-form__label">Profile picture:</label>
                            <span className="settings-form__edit">Edit</span>
                            <div className="settings-form__file">
                                <div className="info">
                                    <div className="image">
                                        <img src={file} alt="file" />
                                    </div>
                                    <div className="name">profileimage.jpg</div>
                                </div>
                                <button className="remove"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) 
}

export default Settings;