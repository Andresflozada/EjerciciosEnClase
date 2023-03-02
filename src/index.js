import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FirsApp from './FirstApp';
import ComponentsApp from './ComponentApp';
import GiftExpertApp from './GiftExpertApp';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';
// import { GifGrid } from './GetGifs';
import Counter from './Counter/Counter';
import { Tiempo } from './tiempo';
import { UseFetch } from './Hooks/useFetch';
import QuoteComponent from './QuoteComponent'; 

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <FirsApp value={10} /> */}
    {/* <FirsApp value={5} /> */}
    {/* <ComponentsApp /> */}
    {/* <GiftExpertApp /> */}
    {/* <GifGrid /> */}
    {/* <AddCategory/> */}
    {/* <Counter/> */}
    {/* <Tiempo />  */}
    {/* <UseFetch/> */}
    <QuoteComponent/>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
