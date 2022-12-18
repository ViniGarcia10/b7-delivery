import React, { useState } from "react";
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
      style={{ borderColor: focused ? mainColor : "#fff" }}
    >
      <div className={styles.button} onClick={() => onSearch(searchValue)}>
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z"
            fill={mainColor}
          />
        </svg>
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
