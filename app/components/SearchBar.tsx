import { useState } from "react";
import styles from "./SearchBar.module.scss";

interface SearchBarProps {
  onSearch: (term: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };
  const handleClear = () => {
    setSearchTerm("");
    onSearch("");
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={handleChange}
      />
      {searchTerm && (
        <button onClick={handleClear} className={styles.clearButton}>
          X
        </button>
      )}
    </div>
  );
}
