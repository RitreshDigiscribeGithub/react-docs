import React from "react";
import ReactCode from "../../../../components/ReactCode";

export default function WhatIsListRendering() {
  return (
    <>
      <h1>What Is List Rendering</h1>
      <ul data-ul="List Rendering">
        <li>In list rendering, we render to array item in JSX in template</li>
        <li>we use map() method in JSX in template for rendering to list</li>
      </ul>
      <ul data-ul="map() method">
        <li>map() method creates a new array with the results of calling a function for every array element</li>
        <li>map() does not change the original array</li>
      </ul>
      <ReactCode file="syntax" dot="js" code={`
       let myArray = [1,2,3,4,5,6,7,8,9,10];

       arr.map(( element:ele , index?:i , arrayName?:myArray)=>{
           console.log(ele);//new array of myArray
       })
      `}/>
    </>
  );
}
