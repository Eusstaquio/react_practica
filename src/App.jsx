import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBs from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavbarBs/>
      <ItemListContainer greeting={"Hola, aquí veras tus productos proximamente"}/>
    </>
  )
}

export default App
