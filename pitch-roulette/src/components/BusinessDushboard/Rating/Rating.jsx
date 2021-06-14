import React from 'react';
import './Performance.css';

const Rating = () => {
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
                            <div className="performance__first">
                                <h3 className="performance__title">Average time per pitch</h3>
                            </div>
                            <div className="performance__second">
                                <h3 className="performance__title">Interest rate</h3>
                            </div>
                            <div className="performance__third">
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
            </div>
        </>
    ) 
}

export default Rating;