import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from './components/about'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Projects from "./components/Projects";
function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
