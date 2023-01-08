import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type, mType) => {
    setAlert({
      msg: message,
      type: type,
      modeType: mType
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success", "primary");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success", "secondary");
    }
  }
  return (
    <> {/*jsx fragment to return multiple tags*/}
      <Router>
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} /> {/* used props*/}
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            {/* Concept of exact
                /users --> Component 1 
                /users/home --> Component 2 */}
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode} toggleMode={toggleMode} />}/>
            <Route exact path="/about" element={<About />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;