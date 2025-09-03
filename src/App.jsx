import { useRef } from 'react';
import './App.css';
import About from './Components/About';
import Experience from './Components/Experience';
import ContactForm from './Components/Contactme';
import Intro from './Components/Intro';
import Projects from './Components/Projects';
import ScrollToTopButton from './Components/Scroll';
import Statistics from './Components/Statistics';
import Techstacks from './Components/Techstacks';
import SkillsModern from './Components/SkillsModern';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Social from './Components/Social';


function App() {


  const divRef = useRef(null);

  const handleScroll = () => {
    const scrollTop = divRef.current.scrollTop;
    console.log(scrollTop); // Scroll Y value of the div
  };



  return (
    <div className="App">

      <Nav />
      <Intro />
      <About ref={divRef} func={handleScroll} />
      <Experience />
      <SkillsModern />
      <Projects />
      <Statistics />
      <ContactForm />
      <ScrollToTopButton />
      <Social />
      <Footer />
    </div>
  );
}

export default App;


