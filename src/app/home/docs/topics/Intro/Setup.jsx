import React from "react";
export default function Setup() {
  return (
    <>
      <h1>Setup</h1>
      <ul data-ul="development environment">
        <li>Node js ( npm )</li>
        <li>VS Code</li>
      </ul>

      <ul data-ul="create app">
        <li>
          <span className="cli">npx create-react-app my-app</span>
        </li>
      </ul>

      <ul data-ul="run app">
        <li>
          <span className="cli">npm start</span>
        </li>
      </ul>
    </>
  );
}
