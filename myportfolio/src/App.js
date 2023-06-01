import { useRef } from 'react';
import './App.css';
import About from './Components/About';
import ContactForm from './Components/Contactme';
import Intro from './Components/Intro';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import ScrollToTopButton from './Components/Scroll';
import Statistics from './Components/Statistics';
import Techstacks from './Components/Techstacks';
import { ChakraProvider } from '@chakra-ui/react';
import Footer from './Components/Footer';


function App() {

  
    const divRef = useRef(null);
  
    const handleScroll = () => {
      const scrollTop = divRef.current.scrollTop;
      console.log(scrollTop); // Scroll Y value of the div
    };
  


  return (
    <div className="App">
      
     <Navbar/>
     <Intro/>
     <About ref={divRef} func={handleScroll}/>
     <Techstacks/>
     <Projects/>
     <Statistics/>
    <ContactForm/>
    <ScrollToTopButton/>
    <Footer/>
    </div>
  );
}

export default App;
