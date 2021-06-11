import React from 'react';
import { Link } from 'react-router-dom';


const firstItems = ['Art', 'Marketing', 'Ecommerce', 'Education', 'Entertainment', 'Events', 'Fashion', 'Finance', 'Fitness and health', 'Gaming', 'Info technology', 'IOT'];
const secondItems = ['Logistics', 'Manufacturing', 'Media', 'Mobile Apps', 'Platforms', 'Restaurants', 'Real Estate', 'Retail', 'Service', 'Sports', 'Travel', 'Crypto'];

class Industries extends React.Component {
    
    state = {
        second: false,
        selected: []
    }

    checkSelected(value){

        window.s = this.state.selected;

        const str = this.state.selected.filter(item => item === value);
        return str.length ? true : false;
    }

    toggleItem = (value) => {
        const str = this.state.selected.find(item => item === value);
        if (str){
            this.setState(({selected}) => {
                return {selected: [...selected.filter(item => item !== value)]}
            });
          
        } else {
            this.setState(({selected}) => {
                return {selected: [...selected, value]};
            });
        }
    }

    render() {
        return (
            <>
                <div className="industries">
                    <div className="container">
                        <div className="industries__wrapper">
                            <h2 className="industries__title">Select industries to which you want to contribute</h2>
                            <div className="industries__slider">
                                <div className={`industries__slider-wr ${this.state.second && 'industries__slider-wr--active'}`}>
                                    <div className="industries__slide">
                                        <div className="industries__content">
                                            {
                                                firstItems.map((item, i) => <div key={i} 
                                                    className={`industries__item ${this.checkSelected(item) && 'industries__item--active'}`}
                                                    onClick={() => this.toggleItem(item)}
                                                    >{item}</div>)
                                            }
                                            
                                        </div>
                                    </div>
                                    <div className="industries__slide">
                                    <div className="industries__content">
                                            {
                                                secondItems.map((item, i) => <div key={i} 
                                                className={`industries__item ${this.checkSelected(item) && 'industries__item--active'}`}
                                                onClick={() => this.toggleItem(item)}
                                                >{item}</div>)
                                            }
                                            
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="industries__pagination pagination">
                                <span className={`pagination__item ${!this.state.second && 'pagination__item--active'}`} onClick={e=> {this.setState({second: false})}}></span>
                                <span className={`pagination__item ${this.state.second && 'pagination__item--active'}`} onClick={e=> {this.setState({second: true})}}></span>
                            </div>
                        </div>
                        <div className="industries__confirm">
                            <Link className="industries__btn" to="/community/sign_up_step_3">Confirm</Link>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}

export default Industries;