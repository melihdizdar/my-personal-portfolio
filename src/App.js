import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import Introduction from "./components/Introduction";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar/>
      <main className="uk-position-relative">
        <SocialLinks/>
        <Introduction/>
        <Resume/>
        <Skills/>
        <Projects/>
      </main>
    </>
  );
}

export default App;
