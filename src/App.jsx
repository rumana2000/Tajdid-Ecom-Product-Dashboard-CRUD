import CreateProduct from "./page/CreateProduct"
import { Route, Routes } from "react-router-dom"
import React from "react";
import Layout from "./component/Layout"
import Product from "./page/Product";
import Home from "./page/Home";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/product/create" element={<CreateProduct />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
