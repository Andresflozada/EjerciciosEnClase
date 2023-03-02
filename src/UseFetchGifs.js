import { useEffec, useState } from "react";
import { getGifs } from "../helpers/gifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const images = await getGifs(category);
    setImages(images);
  };

  useEffecies(() => {
    getImages();
  }, []);

  return {
    images: images,
    isoading: false
  }
};
