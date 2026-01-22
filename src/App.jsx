import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import CategoriesPage from './components/Categories/CategoryPage'
import CategoryProductsPage from './components/Categories/CategoryProductsPage'
import Products from './components/Products/ProductPage'
import Sales from './components/Sales/SalePage'
import Cart from './components/Cart/Cart'
import SaleSection from './components/Sales/SaleSection'
import SalePage from './components/Sales/SalePage'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/categories/:id" element={<CategoryProductsPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/sale" element={<SalePage />} />
        <Route path="/basket" element={<Cart />} />
      </Routes>
      <SaleSection />
      <Footer />
    </>
  )
}

export default App
