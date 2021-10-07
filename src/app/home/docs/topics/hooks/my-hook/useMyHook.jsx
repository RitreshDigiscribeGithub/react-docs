import { useState } from "react";

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
    // return { count, funcAdd, funcRemove };
}

