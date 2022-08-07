import React, { useState } from "react";
import { AddCategory , GifGrid } from "./components";
export const GifExpertApp = () => {
  const [category, setCategory] = useState(["pelicula"]);
  console.log(category);
  const onAddCategory = (newCategory) => {
    // console.log(newCategory);
    if (category.includes(newCategory)) return;
    setCategory([newCategory, ...category]);
  };
  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>
      {/* input */}
      <AddCategory
        // setCategori={setCategori}
        onNewCategory={(value) => onAddCategory(value)}
      />
      {/* listado de gif */}
      {category.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
      {/* gif Items */}
    </>
  );
};
