import React, { useState } from 'react';
import WaitlistItem from './WaitlistItem';
import avatar1 from '../../../img/partner.jpg'
import avatar2 from '../../../img/self.jpg'


const Waitlist = () => {


    const [data, setData] = useState([
        { id: 1, contributor: avatar1, email: 'kk@gmail.com ', raiting: 4, date: '02.04.2020', invited: true, online: true },
        { id: 2, contributor: avatar2, email: 'kk@gmail.com ', raiting: 3, date: '02.04.2020', invited: false, online: true },
        { id: 3, contributor: avatar1, email: 'kk@gmail.com ', raiting: 5, date: '02.04.2020', invited: false, online: false },
        { id: 4, contributor: avatar2, email: 'kk@gmail.com ', raiting: 3, date: '02.04.2020', invited: false, online: true },
        { id: 5, contributor: avatar1, email: 'kk@gmail.com ', raiting: 3, date: '02.04.2020', invited: false, online: true },
    ])

    const changeInvited = (id) => {
        const newData = data.map((item) => {
            if (item.id === id) {
                item.invited = !item.invited
                return item
            }
            return item
        })

        setData(newData)
    }

    const deleteContributor = id => {
        setData(data.filter((item) => item.id !== id))

    }

    const inviteAll = () => {
        const newData = data.map(item => {
            item.invited = true;
            return item;
        });
        setData(newData)
    }



    return (
        <>
            <div className="waitlist">
                <div className="waitlist__wrapper">
                    <div className="waitlist__head">
                        <h3 className="waitlist__title waitlist__title--15">Waitlist Participants </h3>
                        <span className="waitlist__connections">{2873} contributors</span>
                        <div className="waitlist__btn-wrapper">
                            <button className="waitlist__btn" onClick={inviteAll}>Invite all</button>

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
                            {
                                data.length ?
                                    data.map(item => <WaitlistItem key={item.id} changeInvited={changeInvited} data={item} deleteContributor={deleteContributor} />)
                                    : <h4 className="waitlist-list__no-item">no contributors</h4>
                            }
                        </ul>
                    </div>
                </div>
                <div className="waitlist__footer">
                    <button className="waitlist__view-all">View all</button>
                </div>       
            </div>

        </>
    )
}

export default Waitlist;