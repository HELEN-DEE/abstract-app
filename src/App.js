import Header from "./components/Header";
import Searchpage from "./components/Searchpage";
import Features from "./components/Features";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Searchpage/>
      <Features/>
      <Footer/>
    </div>
  );
}

export default App;
