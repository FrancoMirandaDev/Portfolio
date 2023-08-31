import "./App.css";
import { NavBar } from "./components/navbar.js";
import { Banner } from "./components/Banner.js";
import { Skills } from "./components/Skills.js";
import { Projects } from "./components/Projects.js";
import { Conctact } from "./components/Contact.js";
import { Footer } from "./components/Footer.js";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Conctact />
      <Footer />
    </div>
  );
}

export default App;
