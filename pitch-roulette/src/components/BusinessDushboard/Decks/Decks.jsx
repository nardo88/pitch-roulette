import React, {useState} from 'react';
import './Decks.css';
import DecksItem from './DecksItem';


const Decks = () => {

    const [decksFiles, setDecksFiles] = useState([])

    const uploadFile = (e) => {
      
        const file = e.target.files[0];
        setDecksFiles([...decksFiles, file]);
    }

    const removeFile = i => {
        setDecksFiles(decksFiles.filter((item, ind) => ind !== i));
    }


    return (
        <>
            <div className="decks">
                <div className="decks__header">
                    <h2 className="decks__title">My content</h2>
                    <div className="decks__control">
                        <button className="decks__share">Share content</button>

                        <div className="decks__upload">
                            <div className="decks__upload-text">Upload content</div>
                            <input type="file" onChange={uploadFile} />
                        </div>
                    </div>
                </div>

                <div className="decks__body">
                    <ul className="decks__list">
                        {
                            decksFiles.length ? 
                                decksFiles.map((item, i) => <DecksItem key={i} id={i} data={item} removeFile={removeFile} />)  
                                : <div className="decks__no-file">no files</div>
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Decks;