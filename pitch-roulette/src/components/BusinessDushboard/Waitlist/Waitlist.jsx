import React from 'react';

const Waitlist = () => {
    return (
        <>
            <div className="waitlist">
                <div className="waitlist__head">
                    <h3 className="waitlist__title waitlist__title--15">Waitlist Participants </h3>
                    <span className="waitlist__connections">{2873} contributors</span>
                    <div className="waitlist__btn-wrapper">
                        <button className="waitlist__btn">Invite all</button>

                    </div>

                </div>

                <div className="waitlist__content waitlist-list">
                    <div className="waitlist-list__titles titles">
                        <div className="titles__user titles__item">Contributor</div>
                        <div className="titles__name titles__item">E-mail</div>
                        <div className="titles__rating titles__item">Rating</div>
                        <div className="titles__date titles__item">Date</div>
                        <div className="titles__action titles__item">Action</div>
                    </div>
                    <ul className="waitlist-list__list">
                       
                    </ul>
                </div>
            </div>
        </>
    ) 
}

export default Waitlist;