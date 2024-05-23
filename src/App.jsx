import './App.css';
import Eyes from './Components/Eyes/Eyes';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Jooin from './Components/Jooin/Jooin';
import Platform from './Components/Platform/Platform';
import Seample from './Components/Seample/Seample';
import Smart from './Components/Smart/Smart';

function App() {
  return (
    <div className="App">
    <Header/>
    <Hero/>
    <Jooin/>
    <Platform/>
    <Smart/>
    <Eyes/>
    <Seample/>
    <Footer/>
    </div>
  );
}

export default App;