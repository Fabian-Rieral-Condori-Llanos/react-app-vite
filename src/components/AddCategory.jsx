import React, { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(inputValue);
    const valueInput = inputValue.trim();
    if (valueInput.length <= 1) return;
    // setCategori((categori) => [inputValue, ...categori]);
    onNewCategory(valueInput);
    setInputValue("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
