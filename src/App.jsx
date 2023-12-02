import CreateProduct from "./page/CreateProduct"
import { Route, Routes } from "react-router-dom"
import React from "react";
import Layout from "./component/Layout"
import Product from "./page/Product";

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Product />} />
          <Route path="/create-product" element={<CreateProduct />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
