import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
function App() {
  // const navigate = useNavigate();
  // const handleClick1 = () => {
  //   // window.location.href = "/";
  //   navigate("/");
  // };
  // const handleClick2 = () => {
  //   // window.location.href = "/product";
  //   navigate("/product");
  // };
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Navbar() {
  const navigate = useNavigate();
  const handleClick1 = () => {
    // window.location.href = "/";
    navigate("/");
  };
  const handleClick2 = () => {
    // window.location.href = "/product";
    navigate("/product");
  };
  return (
    <nav style={{ backgroundColor: "gray" }}>
      <button onClick={handleClick1}>home</button>
      <button onClick={handleClick2}>products</button>
    </nav>
  );
}

export default App;
