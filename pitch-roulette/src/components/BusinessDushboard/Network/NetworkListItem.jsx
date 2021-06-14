import React, { useState } from 'react';


const NetworkListItem = ({data}) => {

    const { avatar, online, name, raiting, id } = data;

    const [userControl, setUserControl] = useState(false)

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

    const deletUser = id => {
        console.log(id);
        setUserControl(false)
    }

    return (
        <li className="network-list__item list-item">
            <div className="list-item__user">
                <div className="list-item__image">
                    <img src={avatar} alt="user" />
                    {online && <div className="list-item__online"></div>}
                </div>
            </div>
            <div className="list-item__name">{name}</div>
            <div className="list-item__raiting">{getRaiting(raiting)}</div>
            <div className="list-item__buttons">
                <button className="list-item__cam"></button>
                <div className="list-item__control-wrapper">
                    <button className="list-item__control" onClick={() => setUserControl(!userControl)}><span></span><span></span><span></span></button>

                    {
                        userControl && <ul className="user-control">
                            <li className="user-control__item"><button className="user-control__btn" onClick={() => deletUser(id)}>Delete</button></li>
                        </ul>
                    }
                    
                </div>
            </div>
        </li>
    )
}

export default NetworkListItem;