import React from 'react';
import { Link } from 'react-router-dom';
import congratImg from '../../img/congratulation.png'


const Сongratulations = () => {
    return (
        <>
            <div className="congratulation">
                <div className="container">
                    <div className="congratulation__wrapper">
                        <div className="congratulation__img">
                            <img src={congratImg} alt="congratulation" />
                        </div>
                        <h1 className="congratulation__title">Congratulations! Your profile is published!</h1>
                        <p className="congratulation__description">Since that moment, you can contribute different projects,  chat with pitchers in video chat room, share feedback on decks, get early access to different projects. Your efficiency forms your scoring which defines your performance ratio and place in the rating of contributors.</p>
                        <div className="congratulation__btn">
                            <Link to="/business"  className="industries__btn" >Continue</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Сongratulations;