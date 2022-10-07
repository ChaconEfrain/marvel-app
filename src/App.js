import { Route, Routes } from "react-router-dom";
// import md5 from "js-md5";
import Nav from "./components/Nav/Nav.jsx";
import Characters from "./components/Characters/Characters.jsx";
import Comics from "./components/Comics/Comics";
import Creators from "./components/Creators/Creators.jsx";
import Events from "./components/Events/Events.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </div>
  );
}

export default App;
