
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/Products/ItemListContainer';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element= {
            <ItemListContainer greeting="E-desarrollos a medida, como tú eres "/>
          }>
          </Route>
          <Route path='/servicios/:id' element={
            <ItemDetailContainer/>
          }>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
