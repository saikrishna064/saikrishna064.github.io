import React from "react";
import ReactDOM from "react-dom/client";
import man from "../assets/man.png";
import { About } from "./About/About";
import "./App.scss";

export const App: React.FC = () => {
  return (
    <div className="app">
      <div className="profile">
        <div className="profilePic">
          <img src={man} alt="saikrishna" />
        </div>
        <div className="naming">
          <h1 className="info">Saikrishna Tammi</h1>
          <h6>FullStack Developer</h6>
        </div>
      </div>
      <div>
        <About />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
