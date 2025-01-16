import { useState } from "react";
import s from './SearchBar.module.css'
import toast from "react-hot-toast";

function SearchBar({ onSearchChanged, onSearchClick }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    onSearchChanged(event.target.value);
  };

  const handleSearch = () => {
		if (inputValue) {
			onSearchClick(); 
		} else {
			toast.error('Please enter your request:)')
		}
		
	};
	
	const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className={s.header}>
      <input
        className={s.input}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder="Enter your request..."
      />
      <button className={s.btn} onClick={handleSearch}>
        Search
      </button>
    </header>
  );
}

export default SearchBar;
