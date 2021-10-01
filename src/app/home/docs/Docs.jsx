import React, { useState } from "react";
import { Switch, Route, useRouteMatch, useLocation, NavLink, useHistory } from "react-router-dom";
import { docsRoutes } from "./topics/docs.routes";
import { Grid, MenuList, MenuItem, ListItemText } from "@mui/material";

export default function Docs() {
  let { path, url } = useRouteMatch();
  const { pathname } = useLocation();

  const segment = pathname.split("/");
  console.log(path);

  const SideList = () => {
    let filterlist = docsRoutes.filter((data) => {
      return data.path === segment[3];
    });

    return (
      <MenuList style={{ width: "100%" }}>
        {filterlist[0].list.map((e, i) => (
          <MenuItem key={`m-item-${i}`}>
            <NavLink to={`/home/docs/${segment[3]}/${e.path}`} activeClassName="active-link" className="nav-link">
              {e.name}
            </NavLink>
          </MenuItem>
        ))}
      </MenuList>
    );
  };

  return (
    <Switch>
      <Route exact path={path}>
        <p>docs page work!</p>
      </Route>

      <Grid container>
        <Grid item xs={9}>
          <div className="app-container p-3">
            {docsRoutes.map((topics, i) => (
              <Route path={`${path}/${topics.path}`} key={`docs-${i}`}>
                <topics.component />
              </Route>
            ))}
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="side-panel">
            <SideList />
          </div>
        </Grid>
      </Grid>
      <Route path="*">
        <p>404</p>
      </Route>
    </Switch>
  );
}
