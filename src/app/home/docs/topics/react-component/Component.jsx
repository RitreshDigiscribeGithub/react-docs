import React from "react";
import imgComponent from "../../../../../assets/images/components.png";

export default function Component() {
  return (
    <>
      <h1>Component</h1>
      <ul data-ul="what is Component">
        <li>Component is part of cade that can reuse</li>
        <li>Components is split to UI is reusable pieces</li>
        <li>Components like header,footer,card,navbar etc.</li>
      </ul>
      <img src={imgComponent} className="img-fluid" alt="" />

      <ul data-ul="types for Component">
        <li>1 function component</li>
        <li>2 class component</li>
        <li>3 pure component</li>
        <li>4 HOC (Higher-Order Components)</li>
        <li>5 controlled and components</li>
        <li>6 uncontrolled Components</li>
        <li>7 Dumb Components</li>
        <li>8 smart Components</li>
      </ul>
    </>
  );
}
