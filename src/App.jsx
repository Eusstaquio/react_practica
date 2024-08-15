import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBs from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemDetailContainer } from './components/ItemDetailContainer';
import CartContextProvider from './Context/Cartcontext';
import Catalogo from './components/Catalogo';


function App() {
  return (
    <CartContextProvider>
      <BrowserRouter basename="/">
        <NavbarBs/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:categoryId" element={<ItemListContainer/>} />
          <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
          <Route path='/catalogo' element={<Catalogo/>} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
