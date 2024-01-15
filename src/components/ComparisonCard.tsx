import { Card, Select, Option, CircularProgress, Button } from "@mui/joy";
import AnalysisChart from "./Chart";
import { useState } from "react";
import { getAnalysis } from "../api/getAnalysis";

const ComparisonCard = ({ id, models, onRemove }) => {
  const defaultOption = "";
  const [selectedModelData, setData] = useState(defaultOption);
  const [loading, setLoading] = useState(false);

  const handleSelect = (e, newValue) => {
    setLoading(true);
    getAnalysis(newValue).then(({ data: response }) => {
      setData(response[0]);
      setLoading(false);
    });
  };

  return (
    <Card className="h-96 sm:h-100">
      <Select onChange={handleSelect}>
        {models?.map((option, i) => {
          return (
            <Option key={`option-${i}`} value={option.model_name}>
              {option.model_name}
            </Option>
          );
        })}
      </Select>
      {/* <Button onClick={() => onRemove(id)}>-</Button> */}
      <div className="flex justify-center ">
        {loading && <CircularProgress />}
      </div>
      <AnalysisChart data={selectedModelData} />
    </Card>
  );
};

export default ComparisonCard;
