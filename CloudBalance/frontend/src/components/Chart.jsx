import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import GammelTheme from "fusioncharts/themes/fusioncharts.theme.gammel";


import { buildFusionDataSource } from "../utils/costHelpers";


ReactFusioncharts.fcRoot(FusionCharts, charts, GammelTheme);

const Chart = ({ type, data, startDate, endDate }) => {
  const dataSource = buildFusionDataSource(data, startDate, endDate);
  if (!dataSource) return <p>Select date range</p>;
  
  return (
    <ReactFusioncharts
      type={type}
      width="100%"
      height="50%"
      dataFormat="JSON"
      dataSource={dataSource}
    />
  );
};

export default Chart;
