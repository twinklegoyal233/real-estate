import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";

function App() {
  return (
    <div  className="App">
     <Header/>
     <Body/>
     <Companies/>
     <Residencies/>
    </div>
  );
}

export default App;
