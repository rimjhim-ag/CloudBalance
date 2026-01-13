import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import React from "react";
import GammelTheme from "fusioncharts/themes/fusioncharts.theme.gammel";


ReactFusioncharts.fcRoot(FusionCharts, charts, GammelTheme);


const buildFusionDataSource = (apiData) => {
  if (!apiData || apiData.length === 0) return null;

 
  const monthSet = new Set();
  apiData.forEach(item => {
    Object.keys(item.monthlyCost).forEach(month => {
      monthSet.add(month);
    });
  });

  const months = Array.from(monthSet);

 
  const categories = [
    {
      category: months.map(m => ({ label: m }))
    }
  ];


  const dataset = apiData.map(item => ({
    seriesname: item.groupBy,
    data: months.map(m => ({
      value: item.monthlyCost[m] ?? 0
    }))
  }));

  return {
    chart: {
      caption: "Cost Trend",
      xaxisname: "Month",
      yaxisname: "Cost",
      theme: "gammel",
      drawcrossline: "1",
    },
    categories,
    dataset,
  };
};

charts(FusionCharts);


const Chart = ({ type, data}) => {
  




  const dataSource = buildFusionDataSource(data);

  if (!dataSource) return <p >No data</p>;

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



