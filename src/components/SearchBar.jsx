import { useState } from "react";
import "../styles.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // Llama a la API con la búsqueda
  };

  return (
    <input
      type="text"
      placeholder="Buscar en la API..."
      value={query}
      onChange={handleChange}
      className="search-bar"
    />
  );
};

export default SearchBar;

