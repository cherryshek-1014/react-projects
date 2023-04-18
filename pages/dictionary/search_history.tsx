import React from "react";
import styles from '>>/styles/dictionary.module.css'


type Props = {
    setDisplayText: React.Dispatch<React.SetStateAction<string>>
    searchList: String[]
}

const searchHistory = ({ setDisplayText, searchList }: Props) => {

    const searchedWords = searchList.map((searchText, index) => {
        return (
            <li key={index}>
                <button onClick={() => setDisplayText(searchText)}>{searchText}</button>
            </li>
        )
    })
    return (
        <div className={styles["history-col"]}>
            <p> Previous Searches </p>
            <ol>
                {searchedWords}
            </ol>
        </div>
    )
}

export default searchHistory;
