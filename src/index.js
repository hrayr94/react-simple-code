import React from "react";
// import ReactDOM from "react-dom";
import * as ReactDOMClient from "react-dom/client";

class Header extends React.Component {
  render() {
    return <header>{this.props.title}</header>;
  }
}

class App extends React.Component {
  helpText = "Help text";
  render() {
    return (
      <div className="name">
        <Header title="Head of site" />
        <h1>{this.helpText}</h1>
        <input
          placeholder={this.helpText}
          onClick={this.inputClick}
          onMouseEnter={this.mouseOver}
        />
        <p>{this.helpText === "Help text" ? "Yes" : "No"}</p>
      </div>
    );
  }
  inputClick() {
    console.log("Clicked");
  }
  mouseOver() {
    console.log("Mouse Over");
  }
}

const app = ReactDOMClient.createRoot(document.getElementById("app"));
app.render(<App />);
