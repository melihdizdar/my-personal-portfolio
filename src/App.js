import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import Introduction from "./components/Introduction";

function App() {
  return (
    <>
      <Navbar/>
      <main className="uk-position-relative">
        <SocialLinks/>
        <Introduction/>
      </main>
    </>
  );
}

export default App;
