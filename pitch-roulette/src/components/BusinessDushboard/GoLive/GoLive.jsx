import React from 'react';
import self from '../../../img/self.jpg'
import avatar from '../../../img/control_icon/avatar.png'

const GoLive = () => {



    return (
        <>
            <div className="golive">
                <div className="golive__viewport">
                    <div className="self">
                        <div className="self__content">
                            <img src={self} alt="self" />
                        </div>
                        <div className="self__data">
                            <div className="self__image">
                                <img src={avatar} alt="avatar" />
                            </div>
                            <div className="self__info">
                                <div className="self__raiting">
                                    <div className="self__stars">
                                        <span>
                                        <svg width="13" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.717 4.722a.373.373 0 0 0-.301-.254l-3.948-.573L6.702.317a.373.373 0 0 0-.669 0L4.267 3.895.32 4.468a.373.373 0 0 0-.206.637l2.856 2.784-.674 3.933a.373.373 0 0 0 .541.393l3.532-1.857 3.53 1.857a.374.374 0 0 0 .542-.394L9.765 7.89l2.857-2.784a.373.373 0 0 0 .095-.383z" fill="#fff"/></svg>
                                        </span>
                                       

                                    </div>
                                    <div className="self__raiting-value">4.0</div>
                                </div>
                                <div className="self__name">Jetex</div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="golive__control">

                </div>

            </div>
        </>
    ) 
}

export default GoLive;