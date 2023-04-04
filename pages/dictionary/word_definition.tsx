// word_definiition.tsx
import React from "react";
import styles from '>>/styles/dictionary.module.css'


type Props = {
    displayText: String
}

const WordDefinition = ({ displayText }: Props) => {
    return (
        <div className={styles.main}>
            <p className={styles["search-text"]}>{displayText}</p>
            <p>Phonic of {displayText}</p>
            <p>Translation of {displayText}</p>
            <hr />
            <p>Parts of speech</p>
            <p>Definition</p>
            <p>Synonyms</p>
            <p>Example</p>
        </div>
    );
}

export default WordDefinition;
