import "./App.css";

import bg from "./assets/img/bg-barber-op-3.png";


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Gallery from "./components/Gallery";
import Team from "./components/Team";
import Map from "./components/Map";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <div className="h-screen" style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>
        <Navbar />
        <Hero />
      </div>
      <div className="content min-h-screen">
        <Who />
        <Team />
        <Gallery />
        <Map />
      </div>
      <Footer />
    </div>
  );
}

export default App;
