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
                        redux
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
                        </ol>
                    </li>
                    <li>
                        src
                        <ul>
                            <li>
                                component
                                <ul>
                                    <li>Main.jsx</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    );
}
