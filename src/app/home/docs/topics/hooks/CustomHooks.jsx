import React from "react";
import ReactCode from "../../../../components/ReactCode";
import useItemCounter from "./my-hook/useMyHook";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function CustomHooks() {
    const [count, funcAdd, funcRemove] = useItemCounter(18);
    return (
        <>
            <p>CustomHooks.jsx</p>
            <ul data-ul="Custom Hooks">
                <li>if you create Custom Hooks , file and function name perfix must be "use" like - useMyHook.js</li>
                <li>Custom Hooks is simple java script function</li>
            </ul>

            <ReactCode
                file="useItemCounter"
                dot="jsx"
                code={`
             import { useState } from "react";
             const [count, funcAdd, funcRemove] = useItemCounter(18);

              export default function useItemCounter(itemLimit) {
                  const [count, setCount] = useState(1);

                  const funcAdd = () => {
                      if (count < itemLimit) {
                          setCount(count + 1);
                      }
                  };

                  const funcRemove = () => {
                      if (count !== 1) {
                          setCount(count - 1);
                      }
                  };
                  return [count, funcAdd, funcRemove];
                  //or
                  return {count, funcAdd, funcRemove};
              }`}
            />

            <ReactCode
                file="Component"
                dot="jsx"
                code={`
             import { useState } from "react";
              
              export default function Component() {
                // if hook return array
                const [count, funcAdd, funcRemove] = useItemCounter(18);

                // if hook return object
                const {count, funcAdd, funcRemove} = useItemCounter(18);

                  return (
                      <div>
                        <button onClick={funcRemove}>Remove</button>
                            <span> {count} </span>
                        <button onClick={funcAdd}>Add</button>
                      </div>
                  )
              }
              
             `}
            />
            <div>
                <h5>add item</h5>
                <button className="btn btn-danger" onClick={funcRemove}>Remove</button>
                <span> {count} </span>
                <button className="btn btn-success" onClick={funcAdd}>Add</button>
            </div>
        </>
    );
}
