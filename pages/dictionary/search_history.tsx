import React from "react";
import styles from '>>/styles/dictionary.module.css'


type Props = {
    setDisplayText: React.Dispatch<React.SetStateAction<string>>
    searchList: String[]
}

const History = ({ setDisplayText, searchList }: Props) => {
    const jumpTo = (word) => {
        setDisplayText(word);
    }

    const searchWord = searchList.map((searchText, index) => {
        return (
            <li key={index}>
                <button onClick={() => jumpTo(searchText)}>{searchText}</button>
            </li>
        )
    })
    return (
        <div className={styles["history-col"]}>
            <p> Previous Searches </p>
            <ol>
                {searchWord}
            </ol>
        </div>
    )
}

export default History;
