import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
// eslint-disable-next-line no-unused-vars
import Header from "./components/Header/Header";
import Gear from "./components/Gear/Gear";
import Services from "./components/ServicesComponent/Services";
import Discography from "./components/Discography/Discography";
import About from "./components//About/About";
import Landing from "./components/Landing/Landing";
import Footer from "./components/Footer/Footer";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import tracks from "../src/components/AudioPlayer/tracks";

import "./grid.css";
import "./style.css";

function App() {
  console.log(tracks);
  return (
    <BrowserRouter>
      <div className="main-container">
        <Header />
        <div className="container">
          <AudioPlayer tracks={tracks} />
          <Nav />
          <Switch>
            <div className="content">
              <Route exact path="/services">
                <Services />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/gear">
                <Gear />
              </Route>
              <Route exact path="/discography">
                <Discography />
              </Route>
              <Route exact path="/">
                <Landing />
              </Route>
            </div>
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
