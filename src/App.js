import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Internship } from "./components/Internship";
import { Contact } from "./components/Contact";
import { Interests } from './components/Interests';
import { Footer } from "./components/Footer";
import { Intro } from "./components/Intro";

function App() {
  return (
    <div className="App">
      <Intro />

      <NavBar />
      <Banner />
      <Skills />
      <Internship />
      <Projects />
      {/* <Interests /> */}
      <Footer />
    </div>
  );
}

export default App;
