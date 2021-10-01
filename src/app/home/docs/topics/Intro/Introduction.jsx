import React from "react";
export default function Introduction() {
  return (
    <>
      <h1>Introduction</h1>
      <ul data-ul="what is react">
        <li>React is javaScript library that use for buliding Ui</li>
        <li>React is maintainen by facebook</li>
        <li>We can create single page application and multiple page application use react library</li>
        <li>React is use virtual dom that is also called ReactDom</li>
      </ul>

      <ul data-ul="Virtual DOM">
        <li>React uses Virtual DOM exists which is like a lightweight copy of the actual DOM(a virtual representation of the DOM)</li>
        <li>
          when we add or remove any elements in Virtual DOM , so this Virtual DOM changes thing compare to Real Dom then upadate Real Dom but in react ,entire DOM is not re-render only apply changes
          is Real Dom
        </li>
      </ul>

      <ul data-ul="Companies Using React.js">
        <li>
          <strong>Facebook &nbsp;</strong>
          <strong>Instagram &nbsp;</strong>
          <strong>WhatsApp &nbsp;</strong>
          <strong>Yahoo! &nbsp;</strong>
          <strong>New York Times &nbsp;</strong>
          <strong>Netflix &nbsp;</strong>
          <strong>Airbnb...&nbsp;</strong>
        </li>
      </ul>
    </>
  );
}
