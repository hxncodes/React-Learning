import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
export default function NotFound() {
  // it will redirect to home page after 2 seconds
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, []);

  return <Grid item xs={8}>NotFound</Grid>;
}
