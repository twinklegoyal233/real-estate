import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";

function App() {
  return (
    <div  className="App">
     <Header/>
     <Body/>
     <Companies/>
     <Residencies/>
     <Value/>
    </div>
  );
}

export default App;
