import './App.css';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from './Components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = () => {

  return (
    <BrowserRouter >
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    </BrowserRouter>
    
  );
};

export default App;
