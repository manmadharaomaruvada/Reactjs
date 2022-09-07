import './App.css';
import ProductList from './components/ProductList';
import CreateProducts from './components/CreateProducts';
import { BrowserRouter, Routes, Route,Link} from 'react-router-dom';
import UpdateProduct from './components/UpdateProduct';
import ViewProduct from './components/ViewProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ul>
        <li><Link to="/create">Create List</Link></li>
        <li><Link to="/ProductList">Product List</Link></li>
      </ul>
        <Routes>
          <Route path="/create" element={<CreateProducts />} />
          <Route path="/ProductList" element={<ProductList/>} />
          <Route path="/update/:id" element={<UpdateProduct/>}/>
          <Route path="/view/:id" element={<ViewProduct/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
