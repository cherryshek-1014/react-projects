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

    return (
        <div className={styles.container}>
            <History setDisplayText={setDisplayText} searchList={searchList} />
            <WordDefinition displayText={displayText} />
            <Search inputText={inputText} setInputText={setInputText} setSearchList={setSearchList} setDisplayText={setDisplayText} />
        </div >
    );
}

export default Dictionary;
