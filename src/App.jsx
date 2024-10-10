import "./App.css";
import BgAnimation from "./Componenets/BgAnimation";
import BottomGrid from "./Componenets/BottomGrid";
import Hero from "./Componenets/Hero";
import NavBar from "./Componenets/NavBar";

function App() {
  return (
    <div className="relative h-screen overflow-hidden body">
      <BgAnimation />
      <NavBar/>
      <BottomGrid/>
      <Hero/>
    </div>
  );
}

export default App;
