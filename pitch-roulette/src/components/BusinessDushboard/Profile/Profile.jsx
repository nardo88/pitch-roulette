import React from 'react';
import { withRouter } from 'react-router-dom';
import './Profile.css'
import user1 from '../../../img/self.jpg';

import {getRaiting} from '../../../helpFunction/Functions'


const Profile = (props) => {

    const userId = +props.match.params.userId;

    const notificationsData = [
        {id: 0, name: 'Jetex', industries: 'Fintech, Fintech, E-commerce, Crypto', avatar: user1, type: 'Request', raiting: 5, online: true, network: 2453, contributorRating: 1125, upvotes: 85, waitlist: 37, profession: 'developer', status: 'Contributor'},
        {id: 1, name: 'Hilary', industries: 'Gaming, Fintech, Crypto', avatar: null, type: 'Missed call', raiting: 4, online: false, network: 3453, contributorRating: 1425, upvotes: 75, waitlist: 32, profession: 'developer', status: 'Contributor'},
    ]

    const getData = i => {
        return notificationsData.filter(item => item.id === i)[0];
    }

    const {name, profession, status, network,  industries, avatar, type, contributorRating, raiting, upvotes, waitlist} = getData(userId);

    const getIndustryList = (str) => {
        return str.split(', ').map((item, i) => <span key={i} className="profile-body__industries-item">{item}</span>)
    }

    const goBack = () => {
        window.history.back();
    }
    return(
        <>
            <div className="profile">
                <div className="profile__header">
                    <h2 className="profile__title">Profile page</h2>
                    <button className="profile__go-back" onClick={goBack}>back</button>
                </div>

                <div className="profile__body profile-body">
                    <div className="profile-body__top">
                        <div className="profile-body__main-info">
                            <div className="profile-body__image">
                                {
                                    avatar && <img src={avatar} alt="avatar" />
                                }
                                
                            </div>
                            <div className="profile-body__info">
                                <span className="profile-body__name">{name}</span>
                                <span className="profile-body__profission">{profession}</span>
                            </div>
                        </div>
                        <div className="profile-body__info">
                            <span className="profile-body__status">{status}</span>
                            <div className="profile-body__raiting">{getRaiting(raiting)}</div>
                        </div>
                    </div>
                    <div className="profile-body__content">
                        <ul className="profile-body__content-list">
                            <li className="profile-body__conten-item">
                                <div className="profile-body__conten-title">Network:</div>
                                <div className="profile-body__conten-value">{network} contacts</div>
                            </li>

                            <li className="profile-body__conten-item">
                                <div className="profile-body__conten-title">Industries:</div>
                                <div className="profile-body__conten-value">{getIndustryList(industries)}</div>
                            </li>

                            <li className="profile-body__conten-item">
                                <div className="profile-body__conten-title">Contributor rating:</div>
                                <div className="profile-body__conten-value">{contributorRating}</div>
                            </li>

                            <li className="profile-body__conten-item">
                                <div className="profile-body__conten-title">Upvotes:</div>
                                <div className="profile-body__conten-value">{upvotes}</div>
                            </li>

                            <li className="profile-body__conten-item">
                                <div className="profile-body__conten-title">Waitlist:</div>
                                <div className="profile-body__conten-value">{waitlist}</div>
                            </li>
                        </ul>
                    </div>
                    {
                        type === 'Request' && <div className="profile-body__request">
                                                <button className="decline">Decline</button>
                                                <button className="accept">Accept</button>
                                            </div>
                    }
                    
                </div>
            </div>
        </>
    )
}

const ProfileWithRoute = withRouter(Profile);

export default ProfileWithRoute;