import { useState } from "react";

function SearchBar({ onSearchChanged, onSearchClick }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    onSearchChanged(event.target.value);
  };

  const handleButtonClick = () => {
    onSearchClick();
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Введите запрос..."
      />
      <button onClick={handleButtonClick}>Поиск</button>
    </div>
  );
}

export default SearchBar;
