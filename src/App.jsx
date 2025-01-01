import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact"; 

function App() {
  const [mode, setMode] = useState("dark");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      type: type,
      msg: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "#055052";
      showAlert("success", "Dark mode has been enabled");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#FFEDF5";
      showAlert("success", "Light mode has been enabled");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="Text Utils"
          mode={mode}
          aboutText="About Us"
          toggleMode={toggleMode}
        />

        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} /> 
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter a Text To Analyze"
                  showAlert={showAlert}
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
<Routes>
  <Route path="/contact" element={<Contact mode={mode} />} />  
</Routes>
      </Router>
    </>
  );
}

export default App;
