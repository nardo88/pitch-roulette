import React from 'react';
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';
import GoLive from './GoLive/GoLive';
import Network from './Network/Network';
import Waitlist from './Waitlist/Waitlist';
import Rating from './Rating/Rating';
import Decks from './Decks/Decks';
import Settings from './Settings/Settings';
import Notifications from './Notifications/Notifications';

const BusinessDushboard = () => {
    return (
        <>
            <div className="dushboard">
                <div className="container">
                    <div className="dushboard__wrapper">
                        <div className="dushboard__control control">
                            <ul className="control__list">
                                <li className="control__item">

                                    <NavLink className="control__link" activeClassName="control__link--active" to="/business/dushboard/golive" >
                                        <span className="control__icon">
                                            <svg width="20" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.6 5V1.1c0-.6-.5-1.1-1.1-1.1H1.1C.5 0 0 .5 0 1.1v11.1c0 .6.5 1.1 1.1 1.1h13.3c.6 0 1.1-.5 1.1-1.1V8.3l3.4 3.4c.4.4 1.1.1 1.1-.4V2.1c0-.6-.7-.8-1.1-.4L15.6 5z" fill="#253138" /></svg>
                                        </span>
                                        <span className="control__text">Go live</span>
                                    </NavLink>
                                </li>

                                <li className="control__item">
                                    <NavLink className="control__link" activeClassName="control__link--active" to="/business/dushboard/network" >
                                        <span className="control__icon">
                                            <svg width="18" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m11.828 10.805 2 .396c.019.98.83 1.758 1.815 1.739a1.773 1.773 0 0 0 1.739-1.816 1.776 1.776 0 0 0-1.816-1.74 1.776 1.776 0 0 0-1.589 1.059l-2.053-.406a2.91 2.91 0 0 0-.816-2.014l2.656-3.753a2.25 2.25 0 0 0 2.995-1.062A2.25 2.25 0 0 0 15.696.213a2.245 2.245 0 0 0-2.56 3.608l-2.632 3.714a2.917 2.917 0 0 0-3.694.58l-3.454-2.68a1.766 1.766 0 0 0-.753-2.392 1.782 1.782 0 0 0-2.4.759 1.782 1.782 0 0 0 2.66 2.236L6.386 8.77a2.917 2.917 0 0 0 .724 3.497l-2.14 3.024a2.397 2.397 0 0 0-3.293.806 2.397 2.397 0 0 0 .806 3.294 2.397 2.397 0 0 0 3.294-.806 2.393 2.393 0 0 0-.217-2.792l2.197-3.106a2.915 2.915 0 0 0 2.386.053l2.608 3.85a2.02 2.02 0 0 0 .078 2.854c.806.768 2.086.73 2.854-.077a2.021 2.021 0 0 0-.077-2.854 2.027 2.027 0 0 0-2.227-.372l-2.57-3.797a2.897 2.897 0 0 0 1.02-1.54z" fill="#253138" /></svg>
                                        </span>
                                        <span className="control__text">Network</span>
                                    </NavLink>
                                </li>

                                <li className="control__item">
                                    <NavLink className="control__link" activeClassName="control__link--active" to="/business/dushboard/waitlist" >
                                        <span className="control__icon">
                                            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.104 1.873c-2.497-2.497-6.59-2.497-9.11 0a6.467 6.467 0 0 0-1.572 6.543l-7.26 7.26a.665.665 0 0 0-.162.417v3.306c0 .323.254.578.578.578h3.306c.162 0 .301-.07.417-.162l.832-.832a.597.597 0 0 0 .162-.486l-.093-.878 1.226-.116a.592.592 0 0 0 .532-.532l.115-1.225.879.092a.583.583 0 0 0 .462-.139.632.632 0 0 0 .185-.439v-1.087h1.064c.162 0 .3-.069.416-.161l1.503-1.48c2.289.74 4.786.185 6.497-1.526a6.44 6.44 0 0 0 .023-9.133zm-1.642 4.162c-.693.693-1.803.693-2.474 0-.693-.694-.693-1.804 0-2.474.694-.694 1.804-.694 2.474 0 .67.693.67 1.78 0 2.474z" fill="#253138" /></svg>
                                        </span>
                                        <span className="control__text">Waitlist</span>
                                    </NavLink>
                                </li>

                                <li className="control__item">
                                    <NavLink className="control__link" activeClassName="control__link--active" to="/business/dushboard/rating" >
                                        <span className="control__icon">
                                            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.971 7.706a.586.586 0 0 0-.473-.4l-6.2-.9L10.525.788a.586.586 0 0 0-1.05 0L6.702 6.406l-6.2.9a.586.586 0 0 0-.325 1l4.486 4.373-1.059 6.175a.586.586 0 0 0 .85.618L10 16.556l5.545 2.916a.586.586 0 0 0 .85-.618l-1.059-6.175 4.487-4.373a.586.586 0 0 0 .148-.6z" fill="#253138" /></svg>
                                        </span>
                                        <span className="control__text">Rating</span>
                                    </NavLink>
                                </li>

                                <li className="control__item">
                                    <NavLink className="control__link" activeClassName="control__link--active" to="/business/dushboard/decks" >
                                        <span className="control__icon">
                                            <svg width="20" height="19" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#253138"><path d="M19.45 9.963H12.52a.55.55 0 0 0-.383.944l4.883 4.883a.536.536 0 0 0 .4.173.558.558 0 0 0 .457-.24 8.802 8.802 0 0 0 2.112-5.112.537.537 0 0 0 .012-.099.55.55 0 0 0-.55-.55zM10.426 0a.55.55 0 0 0-.55.55v7.703c0 .303.247.55.55.55h7.704a.55.55 0 0 0 .549-.55A8.82 8.82 0 0 0 10.426 0z" /><path d="M14.66 15.34 8.976 9.655a.536.536 0 0 1-.154-.383V1.247a.55.55 0 0 0-.55-.55C3.655.977 0 4.816 0 9.5c0 4.87 3.95 8.821 8.821 8.821a8.773 8.773 0 0 0 5.803-2.179.557.557 0 0 0 .197-.42.569.569 0 0 0-.16-.382z" /></g></svg>
                                        </span>
                                        <span className="control__text">Decks</span>
                                    </NavLink>
                                </li>


                                <li className="control__item">
                                    <NavLink className="control__link" activeClassName="control__link--active" to="/business/dushboard/settings" >
                                        <span className="control__icon">
                                            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m19.65 12.191-1.888-1.437c.024-.223.044-.48.044-.754 0-.273-.02-.535-.044-.754L19.65 7.81a.891.891 0 0 0 .224-1.149l-1.961-3.308c-.209-.375-.67-.567-1.135-.399l-2.226.871a7.404 7.404 0 0 0-1.336-.754L12.876.766C12.82.328 12.43 0 11.969 0H8.034c-.46 0-.85.328-.906.762L6.787 3.07c-.45.196-.89.446-1.336.754l-2.234-.87c-.417-.157-.919.019-1.127.39L.124 6.656a.878.878 0 0 0 .22 1.153l1.89 1.437A7.569 7.569 0 0 0 2.19 10c0 .23.016.473.044.754l-1.89 1.441a.886.886 0 0 0-.22 1.149l1.962 3.304c.208.372.666.567 1.135.399l2.226-.871c.425.3.875.55 1.336.754l.337 2.3c.056.438.445.77.906.77h3.935c.462 0 .85-.328.907-.762l.34-2.308c.45-.2.887-.446 1.337-.758l2.234.875a.99.99 0 0 0 .337.062.899.899 0 0 0 .79-.453l1.974-3.324a.88.88 0 0 0-.23-1.14zM10 13.332c-1.89 0-3.422-1.496-3.422-3.332 0-1.836 1.537-3.332 3.422-3.332 1.885 0 3.421 1.496 3.421 3.332 0 1.836-1.532 3.332-3.421 3.332z" fill="#253138" /></svg>
                                        </span>
                                        <span className="control__text">Settings</span>
                                    </NavLink>
                                </li>

                                <li className="control__item">
                                    <NavLink className="control__link" activeClassName="control__link--active" to="/business/dushboard/notifications" >
                                        <span className="control__icon">
                                            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.154 20a3.13 3.13 0 0 0 3.062-2.5H6.092A3.13 3.13 0 0 0 9.154 20zM14.997 9.999h-.01a5.84 5.84 0 0 1-5.833-5.833c0-.884.203-1.72.558-2.471A5.833 5.833 0 0 0 3.322 7.5v2.323c-.001 1.65-.724 3.206-1.991 4.278-.423.36-.61.935-.459 1.496.177.653.822 1.07 1.499 1.07h13.562c.71 0 1.38-.46 1.523-1.156a1.46 1.46 0 0 0-.497-1.427 5.545 5.545 0 0 1-1.962-4.085z" fill="#253138" /><path d="M19.154 4.167a4.167 4.167 0 1 1-8.333 0 4.167 4.167 0 0 1 8.333 0z" fill="#253138" /></svg>
                                        </span>
                                        <span className="control__text">Notifications</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="dushboard__content">
                            <Route path="/business/dushboard/golive" render={() => <GoLive /> } />
                            <Route path="/business/dushboard/network" render={() => <Network /> } />
                            <Route path="/business/dushboard/waitlist" render={() => <Waitlist /> } />
                            <Route path="/business/dushboard/rating" render={() => <Rating /> } />
                            <Route path="/business/dushboard/decks" render={() => <Decks /> } />
                            <Route path="/business/dushboard/settings" render={() => <Settings /> } />
                            <Route path="/business/dushboard/notifications" render={() => <Notifications /> } />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BusinessDushboard;