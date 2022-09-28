
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar.jsx';
// import ItemListContainer from './components/Products/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
  {/* <ItemListContainer greeting="E-desarrollos a medida, como tú eres "/> */}
    <ItemDetailContainer/>
    </div>
  );
}

export default App;
