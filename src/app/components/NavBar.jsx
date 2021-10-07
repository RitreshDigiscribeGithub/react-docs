import React, { useState } from "react";
import { NavLink, useRouteMatch, useLocation, useHistory } from "react-router-dom";
import { Box, AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Icon } from "../components/utility/icon";
import { docsRoutes } from "../home/docs/topics/docs.routes";
import Chip from "@mui/material/Chip";
// list Components

export default function NavBar() {
    const [toggle, setToggle] = useState(false);
    let { path, url } = useRouteMatch();
    let { pathname } = useLocation();
    let { replace } = useHistory();
    let docsPath = pathname.split("/")[2] === "docs";
    const navigate = (e, type) => {
        if (type === "docsList") {
            replace(`${url}/docs/${e.path}`);
        } else if (type === "app") {
            const isHome = e === "home" ? `${url}` : `${url}/${e}`;
            replace(isHome);
        }
        setToggle(false);
    };

    const DocsList = () => (
        <List>
            {docsRoutes.map((e, i) => (
                <ListItem button key={`docs-${i}`} onClick={() => navigate(e, "docsList")}>
                    <ListItemText>
                        {e.title} {e.library && <Chip style={{ float: "right" }} label="library" />}
                    </ListItemText>
                </ListItem>
            ))}
        </List>
    );

    const AppList = () => (
        <List>
            {[
                { name: "home", icon: Icon.Home },
                { name: "blogs", icon: Icon.Blogs },
                { name: "docs", icon: Icon.Docs },
                { name: "setting", icon: Icon.Setting },
            ].map((e, i) => (
                <ListItem button key={`app-list-${i}`} onClick={() => navigate(e.name, "app")}>
                    <ListItemIcon>
                        <e.icon />
                    </ListItemIcon>
                    <ListItemText>{e.name}</ListItemText>
                </ListItem>
            ))}
        </List>
    );
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" size="large" sx={{ mr: 1 }} onClick={() => setToggle(true)}>
                            <Icon.Menu />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            {docsPath ? "React" : "docs"}
                        </Typography>
                        <Button color="inherit" onClick={() => replace("/home")}>
                            home
                        </Button>
                        <Button color="inherit">Logout</Button>
                    </Toolbar>
                </AppBar>
            </Box>

            <Drawer open={toggle} onClose={() => setToggle(false)}>
                <Box sx={{ width: 300 }}>{docsPath ? <DocsList /> : <AppList />}</Box>
            </Drawer>
        </>
    );
}
