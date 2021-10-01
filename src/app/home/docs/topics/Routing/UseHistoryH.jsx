import React from "react";
import ReactCode from "../../../../components/ReactCode";

export default function UseHistoryH() {
    return (
        <>
            <h3>useHistory hook</h3>
            <ul data-ul="useHistory Hook">
                <li>useHistory Hook is allow to navigate visted url history for navigation bar</li>
                <li> we should not use location from useHistory() becouse history is mutable means it may be change</li>
            </ul>
            <ul data-ul="useHistory method">
                <li>goBack(): it navigate to back in History </li>
                <li>goForward(): it navigate to forward in History </li>
                <li>push(): it navigate to target define route path ex: push('/home')</li>
                <li>replace(): replace is navigate to target define route path but first remove cureent path from History :ex: push('/')</li>
            </ul>
            <ul data-ul="how to use useHistory Hook"></ul>
            <ReactCode file="Component" dot="jsx" code={`
            import React from "react";
            import { useHistory } from "react-router-dom";
            
            export default function useHistoryHook() {
              const history = useHistory();
              return (
                <div>
                  <button onClick={() => history.goBack()}>go Back</button>
                  <button onClick={() => history.goForward()}>go Forward</button>
                  <button onClick={() => history.push('/home')}>go home</button>
                  <button onClick={() => history.replace('/')}>replace</button>
                </div>
              );
            }
            `}/>
        </>
    );
}
