import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
    <h1 id="head" tabIndex="5">
        Namaste React using JSX🚀
    </h1>
);

// React Component
const HeadingComponent = () => (
    <div id="container">
        {Title()}
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);