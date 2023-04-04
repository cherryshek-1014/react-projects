import React from 'react';
import { useState } from 'react'
import styles from '>>/styles/dictionary.module.css'
import WordDefinition from './word_definition'
import History from './search_history'
import Search from './search'

const Dictionary = () => {
    const [inputText, setInputText] = useState("");
    const [displayText, setDisplayText] = useState("");
    const [searchList, setSearchList] = useState<string[]>([]);

    const handleButtonClick = (e) => {
        e.preventDefault();
        setSearchList((prevTextList) => [inputText, ...prevTextList]);
        setDisplayText(inputText);
        setInputText("");
    }

    const jumpTo = (word) => {
        const inputText = ''
        setDisplayText(word);
    }

    const searchWord = searchList.map((searchText, index) => {
        return (
            <li key={index}>
                <button onClick={() => jumpTo(searchText)}>{searchText}</button>
            </li>
        )
    })


    const handleOnChange = (event) => {
        setInputText(event.target.value);
    }


    return (
        <div className={styles.container}>
            <History searchWord={searchWord} />
            <WordDefinition displayText={displayText} />
            <Search inputText={inputText} handleButtonClick={handleButtonClick} handleOnChange={handleOnChange} />
        </div >
    );
}

export default Dictionary;
