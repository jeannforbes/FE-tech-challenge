import { Card, CardContent, extendTheme } from "@mui/joy";
import { useNavigate } from "react-router-dom";

const Model = ({ data }) => {
  const navigate = useNavigate();
  const routeChange = ({ model_name }) => {
    const path = `/analysis/${model_name}`;
    navigate(path);
  };

  return (
    <Card
      sx={{
        "&:hover": {
          boxShadow: "0 0 2px #B4D4FF",
          backgroundColor: "#EEF5FF",
          border: "1px solid #EEF5FF",
          cursor: "pointer",
        },
        margin: "5px",
        border: "1px solid #CCC",
      }}
      orientation="horizontal"
      onClick={() => routeChange(data)}
    >
      <CardContent>{data.model_name}</CardContent>
      <CardContent>{data.model_type}</CardContent>
    </Card>
  );
};

export default Model;
