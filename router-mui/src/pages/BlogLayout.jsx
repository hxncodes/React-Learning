import { Link, Outlet } from "react-router-dom";

export default function BlogLayout() {
  return (
    <>
      <Link to="/blog/1">First Blog</Link>
      <br />
      <Link to="/blog/2">Second Blog</Link>
      <Outlet />
    </>
  );
}
