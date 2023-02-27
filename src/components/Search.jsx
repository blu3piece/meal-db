import { useState } from "react";
import { useGlobalContext } from "../context";

const Search = () => {
    const [text, setText] = useState("");
    const { setSearchTerm, fetchRandomMeal } = useGlobalContext();

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text) {
            setSearchTerm(text);
        }
    };

    const handleRandomClick = (e) => {
        setSearchTerm("");
        setText("");
        fetchRandomMeal();
    };

    return (
        <header className="search-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    placeholder="type your meal!"
                    className="form-input"
                    onChange={handleChange}
                />
                <button type="submit" className="btn">
                    search
                </button>
                <button
                    type="button"
                    className="btn btn-hipster"
                    onClick={handleRandomClick}
                >
                    Suprise Me!
                </button>
            </form>
        </header>
    );
};

export default Search;
