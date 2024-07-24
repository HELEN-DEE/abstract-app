import Header from "./components/Header";
import Searchpage from "./components/Searchpage";
import Features from "./components/Features";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <main className="!overflow-x-hidden">
      <Header/>
      <Searchpage/>
      <Features/>
      <Footer/>
    </main>
  );
}

export default App;
