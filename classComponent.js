import React from "react";
import { ReactDOM } from "react";

 class ChildComponent extends React.Component{
    render() {
         return (
             <div>
                <p>{this.props.name}</p>
                <p>{this.props.age}</p>
             </div>
         )
    }
}

class ParentComponent extends React.Component{
    render() {
         return(
            <div>
                <ChildComponent name= 'John' age='30' />
                <ChildComponent name= "Mary" age='25' />
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <ParentComponent />
  </React.StrictMode>
);
