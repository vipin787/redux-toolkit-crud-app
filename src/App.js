import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Create />} />
        <Route path="/read" element={<Read />} />
        <Route path="/eidt/:id" element={<Update />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
