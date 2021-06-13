import React from 'react';
import self from '../../../img/self.jpg'
import avatar from '../../../img/control_icon/avatar.png'
import setting from '../../../img/control_icon/setting.svg';
import share from '../../../img/control_icon/share.svg';
import micro from '../../../img/control_icon/mic.svg';
import up from '../../../img/control_icon/up.svg';
import down from '../../../img/control_icon/down.svg';
import addContact from '../../../img/control_icon/add_contact.svg';
import partner from '../../../img/partner.jpg';
import btn1 from '../../../img/control_icon/btn1.svg';
import stop from '../../../img/control_icon/stop.svg'
import next from '../../../img/control_icon/next.svg'
import fullscreen from '../../../img/control_icon/fullscreen.svg'

const GoLive = () => {

    const showReiting = num => {
        const arrayStars = [];
        for (let i = 0; i < 5; i++) {
            if (i < num) {
                arrayStars.push(
                    <span key={i}>
                        <svg width="13" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="#fff" d="M12.717 4.722a.373.373 0 0 0-.301-.254l-3.948-.573L6.702.317a.373.373 0 0 0-.669 0L4.267 3.895.32 4.468a.373.373 0 0 0-.206.637l2.856 2.784-.674 3.933a.373.373 0 0 0 .541.393l3.532-1.857 3.53 1.857a.374.374 0 0 0 .542-.394L9.765 7.89l2.857-2.784a.373.373 0 0 0 .095-.383z" fill="#fff" /></svg>
                    </span>
                
                )
            } else {
                arrayStars.push(
                    <span key={i}>
                        <svg width="13" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="#fff" d="M12.717 4.722a.373.373 0 0 0-.301-.254l-3.948-.573L6.702.317a.373.373 0 0 0-.669 0L4.267 3.895.32 4.468a.373.373 0 0 0-.206.637l2.856 2.784-.674 3.933a.373.373 0 0 0 .541.393l3.532-1.857 3.53 1.857a.374.374 0 0 0 .542-.394L9.765 7.89l2.857-2.784a.373.373 0 0 0 .095-.383z" fill="none" /></svg>
                    </span>
                )
            }
        }
        return arrayStars;
    }

    return (
        <>
            <div className="golive">
                <div className="golive__viewport">
                    <div className="self">
                        <div className="self__content">
                            <img src={self} alt="self" />
                        </div>
                        <div className="self__data">
                            <div className="self__column">
                                <div className="self__image">
                                    <img src={avatar} alt="avatar" />
                                </div>
                                <div className="self__info">
                                    <div className="self__raiting">
                                        <div className="self__stars">
                                            {showReiting(4)}
                                        </div>
                                        <div className="self__raiting-value">4.0</div>
                                    </div>
                                    <div className="self__name">Jetex</div>
                                </div>

                            </div>

                            <div className="self__column">
                                <button className="self__settings">
                                    <img src={setting} alt="" />
                                </button>
                            </div>
                        </div>

                        <div className="self__control">
                            <button className="self__share self__btn"><img src={share} alt="share"/></button>
                            <button className="self__microfone self__btn"><img src={micro} alt="share"/></button>
                        </div>

                    </div>

                    <div className="partner">
                        <div className="partner__content">
                            <img src={partner} alt="partner" />
                        </div>

                        <div className="partner__data">
                            <div className="partner__column">
                                <div className="partner__image">
                                    <img src={avatar} alt="avatar" />
                                </div>
                                <div className="partner__info">
                                    <div className="partner__raiting">
                                        <div className="partner__stars">
                                            { showReiting(5) }
                                        </div>
                                        <div className="partner__raiting-value">5.0</div>
                                    </div>
                                    <div className="partner__name">Jetex</div>
                                </div>

                            </div>

                            <div className="partner__column">
                                <button className="partner__add-contact">
                                    <img src={addContact} alt="" />
                                </button>
                            </div>
                        </div>

                        <div className="partner__control">
                            <button className="partner__share partner__btn"><img src={down} alt="share"/></button>
                            <button className="partner__microfone partner__btn"><img src={up} alt="share"/></button>
                        </div>
                    </div>
                
                
                </div>
                <div className="golive__control">
                    <button className="golive__btn"><img src={btn1} alt="btn" /></button>
                    <button className="golive__btn"><img src={stop} alt="stop" /></button>
                    <button className="golive__btn"><img src={next} alt="next" /></button>
                    <button className="golive__btn"><img src={fullscreen} alt="fullscreen" /></button>
                </div>

            </div>
        </>
    )
}

export default GoLive;