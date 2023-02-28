
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Library from './pages/Library';
import Search from './pages/Search';

function App() {
  return (
    <Routes >
      <Route path='/' element={ <Search /> } ></Route>
      <Route path='/mylibrary' element={ <Library /> } ></Route>
    </Routes>
  );
}

export default App;
