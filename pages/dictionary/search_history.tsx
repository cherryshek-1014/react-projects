import React from "react";
import styles from '>>/styles/dictionary.module.css'


type Props = {
    searchWord: Map<string, number>
}

const History = ({ searchWord }: Props) => {
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
