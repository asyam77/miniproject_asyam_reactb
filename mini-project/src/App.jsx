import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import Homepage from "./pages/HalamanUtama/homepage";
import Navbar from "./components/Navbar/navbar.jsx"
import Footer from "./components/Footer/footer";
import ProductPage from "./pages/Produk/product";
import CartPage from "./pages/Keranjang/cart";
import AboutPage from "./pages/Tentang/about";
import CreateProduct from './pages/CreateProduct/CreateProduct';
import DetailProduct from './pages/DetailProduct/DetailProduct';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Sukses  from "./pages/Sukses/Sukses";

function App() {

  return (
      <Router>
        <Navbar/>
        <Routes>

          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/produkList" element={<ProductPage />} />
          <Route path="/keranjang" element={<CartPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/requestproduk" element={<CreateProduct />} />
          <Route path="/detailproduct/:productId" element={<DetailProduct />} />
          <Route path="/detailproduct/:productId" element={<DetailProduct />} />
          <Route  path="/sukses" element={<Sukses />} />
          <Route path="*" element={<ErrorPage />} />

        </Routes>
        <Footer />
      </Router>
  )

}

export default App
