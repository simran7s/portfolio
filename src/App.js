import About from "./components/AboutPage/About";
import Contact from "./components/ContactPage/Contact";
import Footer from "./components/FooterPage/Footer";
import Landing from "./components/LandingPage/Landing";
import Work from "./components/WorkPage/Work";

function App() {

  window.addEventListener("scroll", reveal);


  // FUNCTION FOR REVEALING ANIMATION
  function reveal() {
    let elements = document.querySelectorAll(".reveal")

    elements.forEach(element => {
      let windowHeight = window.innerHeight;
      let revealTop = element.getBoundingClientRect().top;
      let revealPoint = -10;

      // Reveal by adding class if point is reached
      if (revealTop < windowHeight - revealPoint) {
        element.classList.add("revealed")
      }
    });
  }

  return (
    <div className="App">
      <a id="skip-link" tabIndex="0" href="#first-item">SKIP TO MAIN CONTENT</a>
      <Landing />
      <About />
      <Work />
      <Contact />
      <div className="mobile">
        <Footer />
      </div>
    </div>
  );
}

export default App;
