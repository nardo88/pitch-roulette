import React from 'react';
import './PitchersRating.css';
import up from '../../../img/raiting/button-up.svg'
import upSelf from '../../../img/raiting/button-up-self.svg'

const PitchersRatingItem = ({ num, data, upRaiting }) => {

    const { name, avatar, waitlisters, industrie, raiting, id, upvotes } = data;


    return (
        <li className={`pitchers-rating__item ${id === 2 && "pitchers-self__item"}`}>
            <span className="number">{num}</span>
            <div className="avatar">
                {avatar && <img src={avatar} alt="" />}
            </div>
            <div className="user-data">
                <span className="user-data__name">{name}</span>
                <span className="user-data__waitlisters">{waitlisters} waitlisters</span>
            </div>
            <div className="industrie">{industrie}</div>
            <div className="raiting">
                {
                    id === 2 ?
                        <div className="raiting__up">
                            
                            <img src={upSelf} alt="up" />
                            <span>{raiting}</span>
                        </div>
                        :
                        <button className="raiting__up" disabled={upvotes} onClick={(e) => upRaiting(id)}>
                            {upvotes ? <img src={upSelf} alt="up" /> : <img src={up} alt="up" />}
                            <span>{raiting}</span>
                        </button>
                }

            </div>
        </li>
    )
}

export default PitchersRatingItem;