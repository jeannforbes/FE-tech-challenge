import { Card, CircularProgress, Container, Typography } from "@mui/joy";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getAnalysis } from "../../api/getAnalysis";
import Chart from "../../components/Chart";

const getNameFromPath = (location) => {
  const split = location.pathname.split("/");
  return split[split.length - 1];
};

const Analysis = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const name = getNameFromPath(location);
    setName(name);

    getAnalysis(name).then(({ data: response }) => {
      setData(response[0]);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Container>
        <div className="flex flex-col gap-4 pt-4 hidden sm:flex">
          <Typography level="h1">{name}</Typography>
        </div>
        <Card className="h-96 sm:h-screen">
          <div className="flex justify-center ">
            {loading && <CircularProgress />}
          </div>
          <Chart data={data} />
        </Card>
      </Container>
    </>
  );
};

export default Analysis;
