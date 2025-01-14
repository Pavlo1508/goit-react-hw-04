import { useState } from "react";
import toast from "react-hot-toast";

const SearchBar = ({ onSearchChanged }) => {
	const [value, setValue] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		onSearchChanged(value);
		if (value === '') {
			toast.error("Please enter text!");
		};
	}

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
