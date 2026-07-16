import React from "react";
import Greeting from "./Greeting";
import DeStructuringProps from "./component/DeStructuringProps";
import ExternalStyle from "./component/ExternalStyle";
import ModuleStyle from "./component/ModuleStyle";
import ObjectStyle from "./component/ObjectStyle";
import UseStateHook from "./component/UseStateHook";

export default function App() {
  const name = "kumar";
  const age = 24;
  const city = "salem";

  const name2 = "rahul";
  const age2 = 25;
  const city2 = "madurai";

  const name3 = "AK";
  const age3 = 26;
  const city3 = "chennai";

  return (
    <>
      <UseStateHook />
      <ObjectStyle />
      <ModuleStyle />
      <h1 style={{ padding: "20px", color: "red" }}>Hello world -- {name}</h1>
      <ExternalStyle />
      <Greeting first={name} age={age} />
      <DeStructuringProps name={name} age={age} city={city} />
      <DeStructuringProps name={name2} age={age2} city={city2} />
      <DeStructuringProps name={name3} age={age3} city={city3} />
      <p>Kamal</p>
    </>
  );
}
