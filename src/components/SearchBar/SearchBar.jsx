import { useState } from "react";
import s from "./SearchBar.module.css";
import toast from "react-hot-toast";

function SearchBar({ onSearchChanged, onSearchClick }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value.trim();
    setInputValue(value);
    onSearchChanged(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      onSearchClick(inputValue);
    } else {
      toast.error("Please enter your request :)");
    }
  };

  return (
    <header className={s.header}>
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          className={s.input}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your request..."
        />
        <button className={s.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}

export default SearchBar;
