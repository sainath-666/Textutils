import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(": Converted to Uppercase!", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(": Converted to Lowercase!", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert(": Text Cleared!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert(": Text Copied to Clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(": Extra Spaces Removed!", "success");
  };

  const [text, setText] = useState("");
  return (
    <div className="container" data-theme={props.mode}>
      <div className="textform-container">
        <h1 className="mb-4" style={{ fontSize: '2.5rem', fontWeight: '600' }}>{props.heading}</h1>
        <div className="mb-4">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
              minHeight: "200px"
            }}
            id="myBox"
            rows="8"
            placeholder="Enter your text here..."
          ></textarea>
        </div>
        <div className="button-group">
          <button 
            disabled={text.length===0} 
            className="btn btn-primary" 
            onClick={handleUpClick}
            title="Convert text to uppercase"
          >
            <i className="fas fa-arrow-up me-2"></i>
            To Uppercase
          </button>
          <button 
            disabled={text.length===0} 
            className="btn btn-primary" 
            onClick={handleLoClick}
            title="Convert text to lowercase"
          >
            <i className="fas fa-arrow-down me-2"></i>
            To Lowercase
          </button>
          <button 
            disabled={text.length===0} 
            className="btn btn-primary" 
            onClick={handleCopy}
            title="Copy text to clipboard"
          >
            <i className="fas fa-copy me-2"></i>
            Copy Text
          </button>
          <button 
            disabled={text.length===0} 
            className="btn btn-primary" 
            onClick={handleExtraSpaces}
            title="Remove extra spaces"
          >
            <i className="fas fa-compress-arrows-alt me-2"></i>
            Remove Spaces
          </button>
          <button 
            disabled={text.length===0} 
            className="btn btn-primary" 
            onClick={handleClearClick}
            title="Clear all text"
          >
            <i className="fas fa-trash-alt me-2"></i>
            Clear Text
          </button>
        </div>
      </div>

      <div className="text-summary">
        <h2 className="mb-3">Text Summary</h2>
        <div className="summary-stats">
          <div className="stat-item">
            <span className="stat-label">Words:</span>
            <span className="stat-value">{text.split(/\s/).filter((element)=>{return element.length!==0}).length}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Characters:</span>
            <span className="stat-value">{text.length}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Reading Time:</span>
            <span className="stat-value">{(0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length).toFixed(2)} minutes</span>
          </div>
        </div>
      </div>

      <div className="preview-section">
        <h2 className="mb-3">Preview</h2>
        <div className="preview-content">
          {text.length > 0
            ? text
            : "Your text preview will appear here..."}
        </div>
      </div>    </div>
  );
}
