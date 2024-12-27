import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";

function App() {
  return (
    <div>
      <Navbar title="Text Utils" aboutText="About Us" />

      <div className="container my-3">
        <TextForm heading="Enter a Text To Analysed" />

        {/* <About /> */}
      </div>
    </div>
  );
}

export default App;
