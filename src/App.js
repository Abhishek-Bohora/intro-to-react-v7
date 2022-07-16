import { render } from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";
const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      {/* <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Doink" animal="Cat" breed="Mix" /> */}
      <SearchParams />
    </div>
  );
};

// // raw React
// import React from "react";
// import { render } from "react-dom";

// // App is the parent of the Pet so the data flow from parent to child downwards only so here we are passing props from App to Pet Component
// import Pet from "./Pet";
// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", { id: "brand" }, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),

//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cockatiel",
//     }),

//     React.createElement(Pet, {
//       name: "Doink",
//       animal: "Cat",
//       breed: "Mix",
//     }),
//   ]);
// };

// render(React.createElement(App), document.getElementById("root"));

render(<App />, document.getElementById("root"));
