import React from 'react';
import user1 from '../../../img/self.jpg'
import './Notifications.css'
import NotificationsListItem from './NotificationsListItem';

const Notifications = () => {

    const notificationsData = [
        {id: 0, name: 'Jetex', industries: 'Fintech', avatar: user1, type: 'Request', raiting: 5, online: true },
        {id: 1, name: 'Hilary', industries: 'Gaming', avatar: user1, type: 'Missed call', raiting: 5, online: false },
    ]

    return (
        <>
            <div className="notifications">
                <div className="notifications__header">
                    <h2 className="notifications__title">Notifications</h2>
                    <div className="notifications__data notifications-data">
                        <span className="notifications-data__request">1 pending request</span>,
                        <span className="notifications-data__missed-call">1 missed call</span>
                    </div>
                </div>
                <div className="notifications__body">
                    <ul className="notifications__list">
                        {
                            notificationsData.length ? 
                                notificationsData.map(item => <NotificationsListItem key={item.id} data={item} /> )
                                : <div className="notifications__no-data">No data</div>
                        }
                    </ul>
                </div>
            </div>
        </>
    ) 
}

export default Notifications;