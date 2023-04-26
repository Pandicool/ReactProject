import React from "react";
import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";

const ChildComponent = (props) => {
    return (
        <div>
        <p>{props.name}</p>
        <p>{this.props.age}</p>
        </div>
    )
}

const ParentComponent = () => {
    return(
        <div>
            <ChildComponent name= 'John' age='30' />
            <ChildComponent name= "Mary" age='25' />
        </div>
    )
}

const root = createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <ParentComponent />
  </React.StrictMode>
);
