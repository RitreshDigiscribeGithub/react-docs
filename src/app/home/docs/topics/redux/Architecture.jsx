import React from "react";
import imgRA from "../../../../../assets/images/redux-architecture.png";
import Alert from "@mui/material/Alert";
import ReactCode from "../../../../components/ReactCode";

export default function Architecture() {
    return (
        <>
            <h1>architecture of redux</h1>
            <img src={imgRA} alt="" className="img-fluid" />
            <Alert severity="info">
                In redux architecture data flow always in <strong>unidirectional</strong>
            </Alert>
            <ul data-ul="1 View">
                <li>
                    <strong>View :</strong> from , button,input html are called View , View is called to <strong>Action</strong> on any event etc.
                </li>
            </ul>
            <ReactCode
                file="View"
                dot="jsx"
                code={`
            
            `}
            />
            <ul data-ul="2 Action">
                <li>Actions are pure java script object</li>
                <li>
                    Actions is always tell <strong>what to do</strong>
                </li>
                <li>
                    Action is callect to data form View or API call then Action is send data to <strong>Reducer</strong>
                </li>
            </ul>
            <ReactCode
                file="action"
                dot="jsx"
                code={`
            export const func = (number)=>{
               return {
                   type:'action name',
                   payload:number
                }
              }
            `}
            />
            <ul data-ul="3 Reducer">
                <li>
                    In reducer function have two parameters <strong>current state</strong> and <strong>action</strong> and return a <strong>new state</strong>
                </li>
                <li>
                    reducer is change to state according to <strong>action.type </strong>
                </li>
                <li>
                    for match to action.type , we use <strong>switch case</strong> inside reducer
                </li>
                <li>
                    Reducer is received to data from Action then store to data in <strong>store</strong>
                </li>
                <li>
                    Reducer is filter to according to Action than data is store in <strong>store</strong>
                </li>
            </ul>
            <ReactCode
                file="reducer"
                dot="js"
                code={`
            const funcReducer = (state=initialState,action)=>{
               switch (action.type) {
                   case 'Increment': return state + action.payload;//new_state
                   case 'Increment': return state - 1 ;//new_state
                   default: return state
               }
              }
            `}
            />
            <ul data-ul="4 store">
                <li>
                    store is container to <strong>state of application</strong> ,store is brings together <strong>state</strong> ,<strong>action</strong> , <strong>reducer</strong>
                </li>
                <li>In application has only one store</li>
                <li>
                    store is container to <strong>state of application</strong>
                </li>
                <li>
                    store is send to data in diffrent <strong>View</strong>
                </li>
            </ul>
        </>
    );
}
