import React from "react";
import Setting from "./setting/Setting";
import Docs from "./docs/Docs";
import Blogs from "./blogs/Blogs";
import BlogPage from "./blogs/BlogPage";
import NavBar from "../components/NavBar";
import { Route, useRouteMatch } from "react-router-dom";

export default function Home() {
  let { path, url } = useRouteMatch();
  return (
    <>
      <NavBar />
      <Route exact path={path}>
        <p>home page work!</p>
      </Route>
      <Route path={`${path}/docs`}>
        <Docs />
      </Route>
      <Route path={`${path}/setting`}>
        <Setting />
      </Route>
      <Route exact path={`${path}/blogs`}>
        <Blogs />
      </Route>
      <Route path={`${path}/blogs/:ID`}>
        <BlogPage />
      </Route>
    </>
  );
}
