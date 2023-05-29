import './App.css';
import About from './Components/About';
import ContactForm from './Components/Contactme';
import Intro from './Components/Intro';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Statistics from './Components/Statistics';
import Techstacks from './Components/Techstacks';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <About/>
     <Techstacks/>
     <Projects/>
     {/* <Statistics/> */}
    <ContactForm/>

    </div>
  );
}

export default App;
