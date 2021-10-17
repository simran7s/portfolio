import About from "./components/AboutPage/About";
import Contact from "./components/ContactPage/Contact";
import Footer from "./components/Footer/Footer";
import Landing from "./components/LandingPage/Landing";
import Work from "./components/WorkPage/Work";


function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
