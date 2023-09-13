import "./App.css";
import "./styles/second_section.css";
import Navbar from "./components/navbar";
import AnimateIn from "./utils/AnimateIn";
import Card from "./components/card";

//IMAGES
import background from "./assets/bg.png";
import drone from "./assets/drone.webp";
import line from "./assets/design.svg";
import Landing from "./components/landing";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          position: "relative",
          className: "first-page",
          height: "100vh",
        }}
      >
        <Navbar />

        {/* Drone image on the right of the page */}
        <img src={drone} alt="drone-image" className="droneImg" />

        {/* THIS ENTIRE DIV IS FOR RENDERING THE LINE RUNNING THROUGH THE LEFT SIDE OF THE HOME PAGE*/}
        <div className="line">
          <img src={line} alt="line" className="line-top" />
          <svg
            aria-hidden="true"
            height="24"
            viewBox="0 0 24 24"
            version="1.1"
            width="24"
            data-view-component="true"
            className="dev-brackets"
          >
            <path d="M15.22 4.97a.75.75 0 0 1 1.06 0l6.5 6.5a.75.75 0 0 1 0 1.06l-6.5 6.5a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L21.19 12l-5.97-5.97a.75.75 0 0 1 0-1.06Zm-6.44 0a.75.75 0 0 1 0 1.06L2.81 12l5.97 5.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.5-6.5a.75.75 0 0 1 0-1.06l6.5-6.5a.75.75 0 0 1 1.06 0Z"></path>
          </svg>
          <div className="line-bottom">&nbsp;</div>
        </div>

        {/* From here, I have tried to show more about me from just my coding skills through the website*/}
        <Landing />

        {/* TEXT IN BETWEEN SECTIONS */}

        <div className="in-between">
          <svg
            aria-hidden="true"
            height="24"
            viewBox="0 0 24 24"
            version="1.1"
            width="24"
            data-view-component="true"
            style={{ fill: "#2ea043 " }}
          >
            <path d="M7.5 1.75C7.5.784 8.284 0 9.25 0h5.5c.966 0 1.75.784 1.75 1.75V4h4.75c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 21.25 22H2.75A1.75 1.75 0 0 1 1 20.25V5.75C1 4.784 1.784 4 2.75 4H7.5Zm-5 10.24v8.26c0 .138.112.25.25.25h18.5a.25.25 0 0 0 .25-.25v-8.26A4.235 4.235 0 0 1 18.75 13H5.25a4.235 4.235 0 0 1-2.75-1.01Zm19-3.24v-3a.25.25 0 0 0-.25-.25H2.75a.25.25 0 0 0-.25.25v3a2.75 2.75 0 0 0 2.75 2.75h13.5a2.75 2.75 0 0 0 2.75-2.75Zm-6.5-7a.25.25 0 0 0-.25-.25h-5.5a.25.25 0 0 0-.25.25V4h6Z"></path>
          </svg>
          <h1 className="in-between-text">Dynamic</h1>
        </div>

        <div className="in-between-bottom">
          <div className="bottom-line">&nbsp;</div>
          <h1 className="in-between-desc">
            <span style={{ color: "#7ee687" }}>
              Excel in Every Arena: Study, Sport, Lead!
            </span>{" "}
            I have consistently performed well in studies, sports and held
            various leadership positions as well!
          </h1>
        </div>

        {/* CARD TO DISPLAY INFORMATION */}
        <Card />
        <Footer />
      </div>
    </div>
  );
}

export default App;
