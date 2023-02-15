const categories = ['Señales', 'Diseño Multimedia 1', 'Ingles V' ];

export const ComponentsApp = () => {
  return (
    <>
      <h1>GiftExpert</h1>
      <ol>
        {
          categories.map(
            (category, key) => {
              return <li key={key}>{category}</li>;
            }
          )
        }
      </ol>
    </>
  );
};

export default ComponentsApp;
