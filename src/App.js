import "./App.css";
import Navbar from "./components/navbar";

//IMAGES
import background from "./assets/bg.png";
import drone from "./assets/drone.webp";
import line from "./assets/design.svg";
import Landing from "./components/landing";

function App() {
  return (
    <div className="App">
      <div
        style={{
          backgroundImage: `url(${background})`,
          height: "100vh",
          width: "100vw",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <Navbar />

        {/* Drone image on the right of the page */}
        <img src={drone} alt="drone-image" className="droneImg" />

        {/* Line on the left side of the home page */}
        <img src={line} alt="line" className="line" />

        {/* From here, I have tried to show more about me from just my coding skills through the website*/}
        <Landing />
        
      </div>
    </div>
  );
}

export default App;
