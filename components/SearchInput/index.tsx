import React, { useState } from "react";
import { SearchIcon } from "../../utils/SearchIcon";
import styles from "./styles.module.css";

type PropsSearchInput = {
  mainColor: string;
  onSearch: (searchValue: string) => void;
};

export const SearchInput = ({ mainColor, onSearch }: PropsSearchInput) => {
  const [focused, setFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter" || event.code === "NumpadEnter") {
      onSearch(searchValue);
    }
  };

  return (
    <div
      className={styles.container}
      style={{ borderColor: focused ? mainColor : "var(--white-color)" }}
    >
      <div className={styles.button} onClick={() => onSearch(searchValue)}>
        {SearchIcon(mainColor)}
      </div>
      <input
        className={styles.input}
        placeholder="Digite o produto"
        type={"text"}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onKeyUp={handleKeyUp}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};
