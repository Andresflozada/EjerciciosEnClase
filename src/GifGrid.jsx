import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { getGifs } from "./GetGifs";

export const GifGrid = ({ category }) => {
  const [isLoading, setIsLoading] = useState(true); // Variable de estado que se usa para indicarle al componente que esta en modo "carga"
  const [images, setImages] = useState(null);

  // Esto solo se ejecuta LUEGO de que el componente sea renderizado
  useEffect(() => {
    getGifs(category).then((res) => {
      //Hay que esperar hasta que getGifs devuelva un valor
      setImages(res);
      setIsLoading(false);
      console.log(images);
      console.log(res);
    }); // getGifs es una promesa (promise) que debemos resolver
  }, []);

  // Esto es lo primero que se renderiza
  if(isLoading) {
    return (<></>)
  }

  return (
    <>
      <h3> {category} </h3>
      <div className="card-grid">
        {/* El problema es que "images" NO es un array, por tanto map no se puede ejecutar */}
        {images.map((image, key) => {
          return (
            <GifItem title={image.title} url={image.url}>
              {" "}
            </GifItem>
          );
        })}
      </div>
      <p> Buenas Noches </p>
    </>
  );
};
