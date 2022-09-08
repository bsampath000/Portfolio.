import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Links from './components/Links'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Home />
        <Links />
        <Footer />
      </div>
    </div>
  );
}

export default App;
