import React from "react";
import styles from '>>/styles/dictionary.module.css'

type Props = {
    inputText: string,
    handleButtonClick: (event) => void,
    handleOnChange: () => void
}

const Search = ({ inputText, handleButtonClick, handleOnChange }: Props) => {
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleButtonClick(event);
        }
    };

    return (
        <div className={styles["search-col"]} >
            <div>
                <input type="text" style={{ padding: '10px' }} value={inputText} onKeyDown={handleKeyDown} onChange={handleOnChange} />
                <button style={{ padding: '10px' }} onClick={handleButtonClick}>Search</button>
            </div>
        </div >
    )

}

export default Search;
