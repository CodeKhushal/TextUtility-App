import React, { useState } from 'react' // state Concept

export default function TextForm(props) {
    // event handler to convert text to Upper case
    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    // event handler to convert text to lower case
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    // event handler for changing text
    const handleOnChange = (event) => {
        // console.log("OnChange clicked");
        setText(event.target.value);
    }

    // event handler for text to speech
    const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toggle')
        if (toogle.textContent === "Speak") {
            toogle.innerHTML = "Stop"
        }
        else {
            toogle.innerHTML = "Speak"
            if (toogle.innerHTML === "Speak") {
                window.speechSynthesis.cancel()
            }
        }
    }

    const [fWord, findWord] = useState("");
    const [rWord, replaceWord] = useState("");
    const handlefindChange = (event) => {
        findWord(event.target.value);
    };
    const handleReplaceChange = (event) => {
        console.log(replaceWord(event.target.value));
    };
    const handleReplaceClick = () => {
        let newText = text.replaceAll(fWord, rWord);
        setText(newText);
    };

    // defining  two states text(it is a value) and setText(it is a function) and setting the text to default text
    // using useState hook
    const [text, setText] = useState('');
    return (
        <div>
            <>
                <div className="container">
                    <h1>{props.heading}</h1>
                    <div className="mb-3">
                        {/* if value is changed the onChange event will call handleOnChange function */}
                        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="15" placeholder='Enter your text here'></textarea>
                    </div>
                    
                    {/* if button is clicked the onClick event will call handleUpClick function */}
                    {/* button for uppercase */}
                    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>

                    {/* button for lowercase */}
                    <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>

                    {/* button for text to speech */}
                    <button className="btn btn-warning mx-2 my-2" onClick={speak} id="toggle">Speak</button>

                    {/* input for find word */}
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Find Word</span>
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={fWord} onChange={handlefindChange} id="myBox"/>
                    </div>

                    {/* input for replace word */}
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Replace Word</span>
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={rWord} onChange={handleReplaceChange} id="myBox"/>
                    </div>

                    {/* <textarea className="form-control my-2" value={fWord} onChange={handlefindChange} id="myBox" rows="1"></textarea>

                    <textarea className="form-control my-2" value={rWord} onChange={handleReplaceChange} id="myBox" rows="1"></textarea> */}

                    {/* button for replace word */}
                    <button className="btn btn-warning mx-2 my-2" onClick={handleReplaceClick} id="toggle">Replace Words</button>
                </div>

                <div className="container my-4">
                    <h2>Your text summary</h2>
                    <p>{text.split(" ").length} words and {text.length} characters</p>
                    <h2>Preview</h2>
                    <p>{text}</p>
                </div>
            </>
        </div>
    )
}

