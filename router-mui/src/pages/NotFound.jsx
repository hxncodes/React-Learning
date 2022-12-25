import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  // it will redirect to home page after 2 seconds
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, []);

  return <h1>NotFound</h1>;
}
