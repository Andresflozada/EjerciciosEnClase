import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";
// import { GifGrid } from './GetGifs';

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState([""]);
  const [category, setCategory] = useState("");
  const onAddCategory = (inputCategory) => {
    setCategories((list) => [...list, inputCategory]);
  };

  const onSetCategory = (evt) => {
    setCategory(evt.target.value);
  };

  return (
    <>
      <h1>GiftExpert</h1>
      
      <AddCategory onAddCategory={onAddCategory} />
      {categories.map((category_in_list) => {
        return <GifGrid category={category_in_list} />;
      })}
    </>
  );
};

export default GiftExpertApp;
