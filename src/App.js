import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="parts">
        <Home></Home>
        <About></About>
        <Work></Work>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
