// import './App.css';

import Header from "./Layout/Header";
import Item from "./Product/Item";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ItemDetails from "./Product/ItemDetails";

function App() {

  
  return (

    <BrowserRouter>
    <div className="App">
      <Header />
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/item" element={<Item />} />
      {/* <Route path="/service" element={<Service />} /> */}
      
      <Route path="/itemDetails/:id" element={<ItemDetails />}></Route>
     
    </Routes>
  </BrowserRouter>



  );
}

export default App;
