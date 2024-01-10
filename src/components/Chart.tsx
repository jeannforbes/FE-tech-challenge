import { ResponsiveBar } from "@nivo/bar";
import { useEffect, useState } from "react";

const transformData = ({ data: models }) => {
  if (!models || models.length < 2) return;

  return {
    keys: models[0].value,
    data: models.slice(1).map((model) => {
      return {
        ...model,
        // ...model.value,
        ...Object.keys(model.value).reduce((acc, key) => {
          acc[key] = model.value[key].toPrecision(3);
          return acc;
        }, {}),
      };
    }),
  };
};

const AnalysisChart = (rawData) => {
  const [chart, setChart] = useState({
    data: [],
    keys: [],
  });

  useEffect(() => {
    setChart(transformData(rawData));
  }, [rawData]);

  return (
    <>
      {chart && (
        <ResponsiveBar
          data={chart?.data}
          keys={chart?.keys}
          groupMode="grouped"
          layout="horizontal"
          indexBy="origin"
          margin={{ right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={{ scheme: "nivo" }}
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: "left-to-right",
              itemOpacity: 0.85,
              symbolSize: 20,
            },
          ]}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "cm",
            legendPosition: "middle",
            legendOffset: 32,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "origin",
            legendPosition: "middle",
            legendOffset: -50,
          }}
          animate={true}
        />
      )}
    </>
  );
};

export default AnalysisChart;
