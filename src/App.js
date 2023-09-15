import './App.css';
import Contact from './Components/Contact Layout/Contact';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main';
import Maincontent from './Components/Main Content/Maincontent';

function App() {
  return (
    <div className="App">
      <Main/>
      <Maincontent/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
