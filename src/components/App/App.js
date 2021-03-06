import {Routes, Route } from 'react-router-dom';
import "./base.css";
import PageNotFound from "../pageNotFound/PageNotFound.js"
import Home from "../Home/Home.js"



function App() {

console.log(window.location.hash)
  return (
    <Routes>
      <Route path="*" element={<PageNotFound/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
  );
}

export default App;
