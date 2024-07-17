import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBs from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemDetailContainer } from './components/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter basename="/">
      <NavbarBs/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:id" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
