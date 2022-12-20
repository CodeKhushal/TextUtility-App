import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <> {/*jsx fragment to return multiple tags*/}
      <Navbar title="TextUtils" aboutText="About Us" /> {/* used props*/}
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" />
      </div>
    </>
  );
}

export default App;