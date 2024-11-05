import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
// import Tools from "./components/Tools";  
import Projects from "./components/Projects";
import GetinTouch from "./components/GetinTouch";
import Footer from "./components/Footer";
// import Demo from "./components/pages/Demo";

function App() {
  return (
    <div>
      {/* <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Get In Touch</a>
          </li>
          <li>
            <a href="#footer">Footer</a>
          </li>
        </ul>
      </nav> */}
      <Navbar />
      <section id="home">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>
{/* 
      <section>
        <Tools />
      </section> */}

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <GetinTouch />
      </section>

      <section id="about">
        <Footer />
      </section>
    </div>
  );
}

export default App;
