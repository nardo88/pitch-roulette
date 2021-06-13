import React from 'react';

const Network = () => {
    return (
        <>
            <div className="network">
                <div className="network__head">
                    <h3 className="network__title">My network</h3>
                    <span className="network__connections">{2148} connections</span>
                </div>

                <div className="network__content network-list">
                    <div className="network-list__titles">

                    </div>
                    <ul className="network__list">
                    </ul>
                </div>
            </div>
        </>
    ) 
}

export default Network;