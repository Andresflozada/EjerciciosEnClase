import { useEffect } from "react";

export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=yPp1wIiLlYc61t3lwrG0qc6NGXCYGzQN&q=${category}&limit=10&offset=0&rating=g&lang=en `;
  const resp = await fetch(url);
  const { data } = await resp.json();
  //   console.log(data);
  const gifs = await data.map((elemento) => {
    return {
      id: elemento.id,
      title: elemento.title,
      url: elemento.images.downsized_medium.url,
    };
  });
  return gifs;
};

export const GifGrid = ({ category }) => {
  const gifs = [];
  console.log(
    getGifs(category).then((gif) => {
      gifs.push(gif);
      console.log(gifs[0][0]);
    })
  );
  //    const gifs = getGifs(category).then((gifs) => gifs);
  //   const gifs = getGifs(category).then((gifs) => gifs);
  //   console.log(gifs[0].title);
  return (
    <>
      <h2> {gifs[0]} </h2>
    </>
  );
};
