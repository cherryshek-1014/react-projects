import React from "react";
import styles from '>>/styles/dictionary.module.css'

type Props = {
    inputText: string,
    setInputText: React.Dispatch<React.SetStateAction<string>>
    setSearchList: React.Dispatch<React.SetStateAction<string[]>>
    setDisplayText: React.Dispatch<React.SetStateAction<string>>
}

const Search = ({ inputText, setInputText, setSearchList, setDisplayText }: Props) => {

    const handleButtonClick = (event: React.KeyboardEvent<HTMLInputElement>) => {
        event.preventDefault();
        setSearchList((prevTextList) => [inputText, ...prevTextList]);
        setDisplayText(inputText);
        setInputText("");
    }
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleButtonClick(event);
        }
    };


    const handleOnChange = (event) => {
        setInputText(event.target.value);
    }

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
