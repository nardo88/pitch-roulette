import React from 'react';

const WaitlistItem = ({data, changeInvited, deleteContributor}) => {

    const { id, contributor, email, raiting, date, invited, online } = data;

    const getRaiting = num => {
        const arrayStars = [];
        for (let i = 0; i < 5; i++) {
            if (i < num) {
                arrayStars.push(
                    <span key={i}>
                        <svg width="13" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="#F6483B" d="M12.717 4.722a.373.373 0 0 0-.301-.254l-3.948-.573L6.702.317a.373.373 0 0 0-.669 0L4.267 3.895.32 4.468a.373.373 0 0 0-.206.637l2.856 2.784-.674 3.933a.373.373 0 0 0 .541.393l3.532-1.857 3.53 1.857a.374.374 0 0 0 .542-.394L9.765 7.89l2.857-2.784a.373.373 0 0 0 .095-.383z" fill="#F6483B" /></svg>
                    </span>
                
                )
            } else {
                arrayStars.push(
                    <span key={i}>
                        <svg width="13" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="#F6483B" d="M12.717 4.722a.373.373 0 0 0-.301-.254l-3.948-.573L6.702.317a.373.373 0 0 0-.669 0L4.267 3.895.32 4.468a.373.373 0 0 0-.206.637l2.856 2.784-.674 3.933a.373.373 0 0 0 .541.393l3.532-1.857 3.53 1.857a.374.374 0 0 0 .542-.394L9.765 7.89l2.857-2.784a.373.373 0 0 0 .095-.383z" fill="none" /></svg>
                    </span>
                )
            }
        }
        return arrayStars;
    }


    return (
        <li className="waitlist-list__item">
            <div className="contributor">
                <div className="contributor__image">
                    <img src={contributor} alt="" />
                    {online && <div className="list-item__online"></div>}
                </div>
            </div>
            <div className="email">{email}</div>
            <div className="raiting">{getRaiting(raiting)}</div>
            <div className="date">{date}</div>
            <div className="actions">
                {
                    invited ? 
                        <button className="actions__btn invited" onClick={() => changeInvited(id)}>Invite</button> 
                        : <button className="actions__btn uninvited" onClick={() =>  changeInvited(id)}>Invite</button>
                }
                
                <button className="actions__btn" onClick={() => deleteContributor(id)}>Delete</button>
            </div>
        </li>
    ) 
}

export default WaitlistItem