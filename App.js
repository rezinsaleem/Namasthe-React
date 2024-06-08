
import React from "react";
import ReactDOM from "react-dom/client";
import favas from "./assets/ettan.jpg";

// const heading = React.createElement('h1',{id:'heading'},'hello world from favas!')
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading)

const elem = (<span id="heading">helloo from favas</span>)

const jsxheading =(<div id="myDiv">
  <h1>{elem} hi</h1>
  <a href="https://www.youtube.com/watch?v=jAcIotoYxGU"><img src={favas} className="pic" alt="ettan"/></a>
</div>)

//react functional component - (function name should start with capital letter)
// the below three components are same  ... if we want to add attributes then we need to wrap the return with brackects()

// const HeadingComponent = () =><h1>Namaste React Functional Component</h1>;

// const HeadingComponent2 = () =>(
// <h1 className="head">Namaste React Functional Component</h1>
// );

const HeadingComponent3 = () =>{
  return (<h1 className="head">Namaste React Functional Component asdfghjkl!!!</h1>);
};
//two nested tags
//component composition
// const HeadingComponent4 = () =>(
//   <div>
//     <HeadingComponent3 />
//   <h1 className="head">Namaste React Functional Component</h1>
//   </div>
//   );

const number = 999;
const HeadingComponent4 = () =>(
  <div>
    <HeadingComponent3 />
  <h1 className="head">Namaste React Functional Component</h1>
  <h1 className="head">{100 + 200}</h1>
  {jsxheading}
  <h1 className="head">{number}</h1>
  </div>
  );

const root = ReactDOM.createRoot(document.getElementById('root'))

//this is used to render react element
// root.render(jsxheading)  

//this is used to render react component and thats when babel understoods thisis a component(< />)
root.render(<HeadingComponent4 />)