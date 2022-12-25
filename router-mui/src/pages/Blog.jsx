import React from "react";
import { useParams } from "react-router-dom";

export default function Blog() {
  const { id } = useParams();
  return <h1>Blog {id}</h1>;
}
