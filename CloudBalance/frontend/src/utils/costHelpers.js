
export const getMonthsBetween = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const months = [];
  let current = new Date(start.getFullYear(), start.getMonth(), 1);

  while (current <= end) {
    months.push(current.toLocaleString("default", { month: "short", year: "numeric" }));
    current.setMonth(current.getMonth() + 1);
  }
  return months;
};


export const calculateTotals = (data, months) => {
  const columnTotals = {};
  months.forEach(month => {
    columnTotals[month] = data.reduce((sum, item) => sum + (item.monthlyCost[month] || 0), 0);
  });
  const grandTotal = Object.values(columnTotals).reduce((a, b) => a + b, 0);
  return { columnTotals, grandTotal };
};


export const buildFusionDataSource = (apiData, startDate, endDate) => {
  if (!startDate || !endDate) return null;

  const months = getMonthsBetween(startDate, endDate);
  const categories = [{ category: months.map(m => ({ label: m })) }];

  if (!apiData || apiData.length === 0) {
    return {
      chart: { caption: "Cost Trend", xaxisname: "Month", yaxisname: "Cost", theme: "gammel", drawcrossline: "1" },
      categories,
      dataset: [{ seriesname: "Cost", data: months.map(() => ({ value: 0 })) }],
    };
  }


  

  const dataset = apiData.map(item => ({
    seriesname: item.groupBy,
    data: months.map(m => ({ value: item.monthlyCost[m] ?? 0 }))
  }));

  return { chart: { caption: "Cost Trend", xaxisname: "Month", yaxisname: "Cost", theme: "gammel", drawcrossline: "1" }, categories, dataset };
};



export const transformFilters = (filtersApiData) => {
  if (!filtersApiData) return {};

  const transformed = {};

  Object.keys(filtersApiData).forEach(key => {
    const frontendKey = formatFilterKey(key);
    transformed[frontendKey] = filtersApiData[key].map(value => ({
      label: value,
      value: value
    }));
  });

  return transformed;
};

const formatFilterKey = (key) => {
  return key
    .split("_")            
    .map(word => word[0] + word.slice(1).toLowerCase()) 
    .join(" ");          
};

