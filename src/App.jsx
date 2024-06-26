import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import { GetStarted } from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";
import "./App.css"

function App() {
  return (
    <div  className="App">
     <Header/>
     <Body/>
     <Companies/>
     <Residencies/>
     <Value/>
     <Contact/>
     <GetStarted/>
     <Footer/>
    </div>
  );
}

export default App;
