import React from "react";
import ReactDOM from "react-dom/client";
import "./App.scss";

export const App: React.FC = () => {
  return (
    <div className="app">
      <div className="profile">
        <h1 className="info">Saikrishna Tammi</h1>
        <h6>FullStack Developer</h6>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
