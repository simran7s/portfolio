import About from "./components/AboutPage/About";
import Contact from "./components/ContactPage/Contact";
import Footer from "./components/FooterPage/Footer";
import Landing from "./components/LandingPage/Landing";
import Work from "./components/WorkPage/Work";


function App() {
  return (
    <div className="App">
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
