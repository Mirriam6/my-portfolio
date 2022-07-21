import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

const  App =() => {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
