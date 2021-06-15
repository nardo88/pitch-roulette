import React from 'react';
import './Decks.css';
import file from '../../../img/decks/file.svg'

const DecksItem = ({data, removeFile, id}) => {
    
    const {name} = data;
    return (
        <li className="decks__item">
            <div className="decks__img">
                <img src={file} alt="file img" />
            </div>
            <div className="decks__file-name">{name}</div>
            <button className="decks__remove" onClick={() => removeFile(id)}></button>
        </li>
    )
}

export default DecksItem;