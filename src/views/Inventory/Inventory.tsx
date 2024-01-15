import { useEffect, useState } from "react";
import { getModels } from "../../api/getModels";
import Model from "../../components/Model";
import { CircularProgress } from "@mui/joy";

const ModelCards = () => {
  const [models, setModels] = useState([]);

  useEffect(() => {
    getModels().then((response) => {
      setModels(response.data);
    });
  }, []);

  return (
    <>
      <div className="flex justify-center">
        {models.length < 1 && <CircularProgress />}
      </div>
      <div>
        <div>
          {models.map((model, i) => {
            return <Model key={i} data={model} />;
          })}
        </div>
      </div>
    </>
  );
};

const Inventory = () => {
  return (
    <>
      <ModelCards />
    </>
  );
};

export default Inventory;
