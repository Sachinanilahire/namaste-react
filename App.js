/*
<div id="parent">
<div id="child">
 <h1>Hello i am h1 </h1>
 <h1>Hello i am h1 </h1>
 <div/> 
 <div id="child">
 <h1>Hello i am h1 </h1>
 <h1>Hello i am h1 </h1>
 <div/> 
 <div/> 
*/

let heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello i am h1"),
    React.createElement("h1", {}, "Hello i am h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello i am h3"),
    React.createElement("h1", {}, "Hello i am h4"),
  ]),
]);

console.log(heading); // object
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
