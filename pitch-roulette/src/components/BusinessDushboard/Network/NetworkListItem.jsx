import React from 'react';


const NetworkListItem = ({data}) => {

    const { avatar, online, name } = data;

    return (
        <li className="network-list__item list-item">
            <div className="list-item__user">
                <div className="list-item__image">
                    <img src={avatar} alt="user" />
                    {online && <div className="list-item__online"></div>}
                </div>
            </div>
            <div className="list-item__name">{name}</div>
        </li>
    )
}

export default NetworkListItem;