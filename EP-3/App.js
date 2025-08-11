import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div",{id:"container"},
    [React.createElement("h1",{className:"title"}, "Nested Header Element"),
     React.createElement("h2",{className:"title"}, "Nested Header Element"),
     React.createElement("h3",{className:"title"}, "Nested Header Element")]);

const Heading = () => (
    <div id="container">
        <h1>Nested Header Element</h1>
        <h2>Nested Header Element</h2>
        <h3>Nested Header Element</h3>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading/>);