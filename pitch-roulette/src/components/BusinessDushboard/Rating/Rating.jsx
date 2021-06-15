import React, { useState } from 'react';
import './Performance.css';
import './PitchersRating.css';
import PitchersRatingItem from './PitchersRatingItem';
import user1 from '../../../img/self.jpg'
import user2 from '../../../img/partner.jpg'

const Rating = () => {

    const pitchers = [
        {id: 1, name: 'Jetex', avatar: user1, waitlisters: 1201, industrie: 'IT', raiting: 3.0 },
        {id: 2, name: 'INNoPAY', avatar: user2, waitlisters: 2243, industrie: 'Finance', raiting: 5.0 },
        {id: 3, name: 'Kassa', avatar: user1, waitlisters: 1201, industrie: 'Gaming', raiting: 4.0 },
        {id: 4, name: 'INNoPAX', avatar: user2, waitlisters: 1301, industrie: 'Manufacturing', raiting: 5.0 },
        {id: 5, name: 'mrAnderson', avatar: user1, waitlisters: 2501, industrie: 'IT', raiting: 5.0 },
    ]

    const [pitchersInput, setPitchersInput] = useState('');

    const changeInput = e => {
        setPitchersInput(e.target.value);
    } 

    const onSubmit = (e) =>{
        e.preventDefault()
        
    }

    return (
        <>
            <div className="rating">
                <div className="performance">
                    <div className="performance__header">
                        <h2 className="performance__caption">My performance</h2>
                        <button className="performance__share"></button>
                    </div>

                    <div className="performance__body">
                        <div className="performance__titles">
                            <div className="performance__first">
                                <h3 className="performance__title">Sessions</h3>
                            </div>
                            <div className="performance__second">
                                <h3 className="performance__title">Liked</h3>
                            </div>
                            <div className="performance__third">
                                <h3 className="performance__title">Disliked</h3>
                            </div>
                            <div className="performance__fourth">
                                <h3 className="performance__title">Score</h3>
                            </div>
                        </div>
                        <div className="performance__values">
                            <div className="performance__first">
                                <span className="performance__value">128</span>
                            </div>
                            <div className="performance__second">
                                <span className="performance__value">70</span>
                            </div>
                            <div className="performance__third">
                                <span className="performance__value">58</span>
                            </div>
                            <div className="performance__fourth">
                                <span className="performance__value">5.0</span>
                            </div>
                        </div>
                        <div className="performance__titles">
                            <div className="performance__first performance__time-pitch">
                                <h3 className="performance__title">Average time per pitch</h3>
                            </div>
                            <div className="performance__second performance__interes-rate">
                                <h3 className="performance__title">Interest rate</h3>
                            </div>
                            <div className="performance__third performance__subscription-rate">
                                <h3 className="performance__title">Subscription rate</h3>
                            </div>
                            <div className="performance__fourth">
                                <h3 className="performance__title">Waitlist</h3>
                            </div>
                        </div>
                        <div className="performance__values">
                            <div className="performance__first">
                                <span className="performance__value">00:07:15</span>
                            </div>
                            <div className="performance__second">
                                <span className="performance__value">51%</span>
                            </div>
                            <div className="performance__third">
                                <span className="performance__value">35%</span>
                            </div>
                            <div className="performance__fourth">
                                <span className="performance__value">1001 users</span>
                            </div>
                        </div>
                    </div>
                </div>
           
           
                <div className="pitchers-rating">
                    <div className="pitchers-rating__header">
                        <h2 className="pitchers-rating__title">Pitchers rating</h2>
                        <div className="pitchers-rating__control">
                            <form className="pitchers-rating__form" onSubmit={onSubmit} >
                                <input type="text" className="pitchers-rating__input" placeholder="Search" value={pitchersInput} onChange={changeInput} />
                            </form>
                            <button className="pitchers-rating__share"></button>
                        </div>
                    </div>
                    <div className="pitchers-rating__body">
                        <ul className="pitchers-rating__list">
                            {
                                pitchers.map((item, i) => <PitchersRatingItem key={item.id} num={i + 1} data={item} />)
                            }
                        </ul>
                    </div>
                </div>
           
            </div>
        </>
    ) 
}

export default Rating;