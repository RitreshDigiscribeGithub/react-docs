import React from "react";

export const ReducerTree = () => {
    return (
        <ul>
            <li>
                index.js
                <ul>
                    <li>counter-reducers {">"} counter.js</li>
                    <li>----here more reducers-----</li>
                </ul>
            </li>
        </ul>
    );
};

export const ActionsTree = () => {
    return (
        <ul>
            <li>index.js</li>
        </ul>
    );
};

export const StoreTree = () => {
    return (
        <ul>
            <li>store.js</li>
        </ul>
    );
};

export default function FolderSetup() {
    return (
        <ul>
            <li>
                index.js
                <ul>
                    <li>
                        src
                        <ol>
                            <li>
                                actions
                                <ActionsTree />
                            </li>
                            <li>
                                reducers
                                <ReducerTree />
                            </li>

                            <li>
                                store
                                <StoreTree />
                            </li>
                            <li>
                                component
                                <ul>
                                    <li>Main.jsx</li>
                                </ul>
                            </li>
                        </ol>
                    </li>
                </ul>
            </li>
        </ul>
    );
}
