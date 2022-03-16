import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import Introduction from "./components/Introduction";
import Resume from "./components/Resume";

function App() {
  return (
    <>
      <Navbar/>
      <main className="uk-position-relative">
        <SocialLinks/>
        <Introduction/>
        <Resume/>
      </main>
    </>
  );
}

export default App;
