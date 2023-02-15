import { useState } from "react";
import { AddCategory  } from "./AddCategory";
import { GifGrid } from "./GifGrid"; 

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["Zodiac"]);
  const [category, setCategory] = useState("");
  const onAddCategory = () => {
    setCategories((list) => [...list, category]);
  };

  const onSetCategory = (evt) => {
    setCategory(evt.target.value);
  };

  return (
    <>
      <h1>GiftExpert</h1>

      <input
        type="text"
        value={category}
        onChange={(event) => onSetCategory(event)}
      />
      <button onClick={() => onAddCategory()}>Add Category</button>

      {/* <AddCategory onAddCategory={onAddCategory} /> */}

      <ol>
        {categories.map((category, key) => {
          return <li key={key}>{category}</li>;
        })}
      </ol>
      {/* {categories.map((category, key) => {
        return <GifGrid category={category} key={key} />;
      })} */}
    </>
  );
};

export default GiftExpertApp;
