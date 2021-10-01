import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import UseParamsH from "./UseParamsH";
import UseLocationH from "./UseLocationH";
import UseHistoryH from "./UseHistoryH";
import UseRouteMatchH from "./UseRouteMatchH";

export default function RoutingHooks() {
    const [tab, tabSet] = useState("0");

    const handleChange = (event, newValue) => {
        tabSet(newValue);
    };

    return (
        <div>
            <h1>Routing Hooks</h1>

            <Tabs value={tab} onChange={handleChange} className="mui-tabs">
                <Tab className="t-t-u-s" label="useParams" value="0" />
                <Tab className="t-t-u-s" label="useLocation" value="1" />
                <Tab className="t-t-u-s" label="useHistory" value="2" />
                <Tab className="t-t-u-s" label="useRouteMatch" value="3" />
            </Tabs>
            <br />
            {tab == 0 && <UseParamsH />}
            {tab == 1 && <UseLocationH />}
            {tab == 2 && <UseHistoryH />}
            {tab == 3 && <UseRouteMatchH />}
        </div>
    );
}
