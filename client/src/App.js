import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Footer from './components/Footer';
import Series from './components/Series';
import Movies from './components/Movies';

function App() {
  return (
    <div className="App">
      <Navbar />
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/series' element={<Series />} />
      <Route exact path='/movies' element={<Movies />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
