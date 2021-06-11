import React, { useState } from 'react';
import '../Form/Form.css';

const DropDown = ({items, selected, setSelected}) => {

    const [isActive, setIsActive] = useState(false);
    

    const selectItem = value => {
        setSelected(value);
        setIsActive(false);
    }
    return (
        <div className="container">
            <div className="wrapper">


                <div className="dropdown">
                    <div className="dropdown__btn" onClick={e => setIsActive(!isActive)}><span className="dropdown__value">{selected}</span> </div>
                    {isActive && (
                        <div className="drobdown__content">

                            {items.map((item, i) => <div className="dropdown__item" key={i} onClick={e => selectItem(item)}>{item}</div>)}
                        </div>
                        )
                    }
                </div>



            </div>

        </div>

    )
}

export default DropDown;