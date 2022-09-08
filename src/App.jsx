import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Main from './components/main/Main'
import { BrowserRouter } from 'react-router-dom'
import CartProvider from './context/CartContext'


const App = () => {
  
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App