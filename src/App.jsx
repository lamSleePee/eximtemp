import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Products from './pages/Products'
import ContactUs from './pages/ContactUs'
import Blogs from './pages/Blogs'
import BlogDetail from './pages/BlogDetail'
import ProductDetails from './pages/products/ProductDetails';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import "./App.css"


function App() {

  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<AboutUs />}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/blogs/:slug" element={<BlogDetail />} />
        <Route path="/contactus" element={<ContactUs/>}/>
         {/* 🔟 Separate Product Routes */}
         <Route path="/products/:slug" element={<ProductDetails />} />

      </Routes>
    </Router>
  )
}

export default App
