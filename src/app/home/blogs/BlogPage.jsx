import React from "react";
import { useParams } from "react-router-dom";

export default function BlogPage() {
  const { ID } = useParams();
  return (
    <>
      <p>main Blog Page blog ID : {ID}</p>
    </>
  );
}
