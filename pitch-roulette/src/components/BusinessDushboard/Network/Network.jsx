import React from 'react';
import NetworkListItem from './NetworkListItem';
import user from '../../../img/control_icon/user.png';
import partner from '../../../img/partner.jpg';


const Network = () => {

    const users = [
        {id: 1, avatar: partner, name: 'Jerry Mayer', raiting: 4, online: true },
        {id: 2, avatar: user, name: 'Julia Becker', raiting: 5, online: false },
        {id: 3, avatar: user, name: 'Finche Gold', raiting: 3, online: true },
        {id: 4, avatar: user, name: 'Jerry Mayer', raiting: 4, online: false },
        {id: 5, avatar: user, name: 'Julie Becker', raiting: 5, online: true },
        {id: 6, avatar: user, name: 'Finche Gold', raiting: 5, online: true },
        {id: 7, avatar: user, name: 'Jerry Mayer', raiting: 3, online: false },
        {id: 8, avatar: user, name: 'Julie Becker', raiting: 4, online: false },
        {id: 9, avatar: user, name: 'Finche Gold', raiting: 4, online: false },
        {id: 10, avatar: user, name: 'Jerry Mayer', raiting: 5, online: false },
    ]

    return (
        <>
            <div className="network">
                <div className="network__head">
                    <h3 className="network__title">My network</h3>
                    <span className="network__connections">{2148} connections</span>
                </div>

                <div className="network__content network-list">
                    <div className="network-list__titles titles">
                        <div className="titles__user titles__item">User</div>
                        <div className="titles__name titles__item">Name</div>
                        <div className="titles__rating titles__item">Rating</div>
                    </div>
                    <ul className="network-list__list">
                        {
                            users.map(item => <NetworkListItem key={item.id} data={item} />)
                        }
                    </ul>
                </div>
            </div>
        </>
    ) 
}

export default Network;