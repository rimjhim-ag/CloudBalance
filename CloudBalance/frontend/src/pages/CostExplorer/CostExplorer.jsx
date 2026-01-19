import React, { useEffect, useState } from "react";

import DropDown from "../../components/DropDown";
import Chart from "../../components/Chart";
import FiltersPanel from "../../components/FilterPanel";

import TuneIcon from "@mui/icons-material/Tune";
import AssessmentIcon from "@mui/icons-material/Assessment";
import TimelineIcon from "@mui/icons-material/Timeline";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import CostTable from "../../components/CostTable";

import Loader from "../../components/Loader";
import { filters } from "../../utils/filterConstant";
import useCostReport from "../../hooks/useCostReport";
import { useSelector } from "react-redux";

const chartTabs = [
  { id: "bar", icon: <AssessmentIcon />, type: "mscolumn2d" },
  { id: "line", icon: <TimelineIcon />, type: "msline" },
  { id: "stack", icon: <StackedBarChartIcon />, type: "stackedcolumn2d" },
];

const CostExplorer = () => {
  const [selectedFilter, setSelectedFilter] = useState("SERVICE");
  const [activeChart, setActiveChart] = useState("bar");
  const [filterButton, setFilterButton] = useState(false);
  const [endDate, setEndDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [startDate, setStartDate] = useState(
    new Date(new Date().setMonth(new Date().getMonth() - 6))
      .toISOString()
      .split("T")[0]
  );
  const [appliedFilters, setAppliedFilters] = useState({});
  const [draftFilters, setDraftFilters] = useState({});
  const { selectedAccount } = useSelector(state => state.accounts);
  const { data, loading, error, fetchCostReport } = useCostReport();

  const isReady =
  Boolean(selectedAccount) &&
  Boolean(selectedFilter) &&
  Boolean(startDate) &&
  Boolean(endDate);


  useEffect(() => {
 
      
    fetchCostReport({
      groupBy: selectedFilter,
      startDate,
      endDate,
      accountId: selectedAccount,
      filters: appliedFilters,
    });
  }, [selectedFilter, startDate, endDate, appliedFilters, selectedAccount]);

  const sortedFilters = [
    filters.find((f) => f.value === selectedFilter),
    ...filters.filter((f) => f.value !== selectedFilter),
  ];



  return (
    <div className="h-[90%] overflow-y-auto">
      <div className="mt-10 ml-8 leading-8">
        <h1 className="font-extrabold text-4xl tracking-tight">
          Cost Explorer
        </h1>
        <p className="text-lg">
          How to always be aware of cost changes and history
        </p>
      </div>

      <div className="mt-8 mx-5 rounded-lg flex flex-col">
        <div className="flex items-center justify-between px-4 py-6 bg-[#f8f8f8] border-b-2 border-[#e6e6e6]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-sm whitespace-nowrap">
              Group By:
            </span>

            {sortedFilters.slice(0, 6).map((f) => (
              <span
                key={f.name}
                onClick={() => setSelectedFilter(f.value)}
                className={`
                  whitespace-nowrap
                  px-2 py-1
                  h-8
                  rounded-lg
                  cursor-pointer
                  text-sm
                  font-semibold
                  border-2
                  transition-all duration-150
                  ${
                    selectedFilter === f.value
                      ? "bg-[#0a3ca2] text-white border-[#0a3ca2]"
                      : "bg-white text-[#0a3ca2] border-[#cfdde5] hover:bg-[#0a3ca2]/5"
                  }
                `}
              >
                {f.name}
              </span>
            ))}

            <DropDown
              name="More"
              optionsArr={sortedFilters.slice(6)}
              selected={selectedFilter}
              setSelected={setSelectedFilter}
              styles="font-semibold border-2 border-[#cfdde5] rounded-lg text-[#0a3ca2] px-2 h-[32px]"
            />
          </div>

          <button
            onClick={() => setFilterButton(!filterButton)}
            className={`
              flex items-center justify-center
              w-[42px] h-[35px]
              rounded-lg border-2
              transition-all duration-200
              cursor-pointer
              ${
                filterButton
                  ? "bg-[#0a3ca2] border-[#0a3ca2] text-white"
                  : "bg-white border-[#0a3ca2] text-[#0a3ca2]"
              }
            `}
          >
            <TuneIcon fontSize="medium" />
          </button>
        </div>

        <div className="w-full flex overflow-hidden">
          <div className="bg-white flex-1 min-w-0">
            <div className="flex justify-between items-center px-7 py-5 border-b-2 border-[#e6e6e6]">
              <h1 className="text-[#555b6c]">Costs ($)</h1>

              <div className="flex items-center gap-3">
                <div className=" cursor-pointer flex flex-row justify-center items-center gap-4 border-2 border-[#cfdde5] rounded-lg px-2  h-[32px] text-[#0a3ca2] font-semibold">
                  {" "}
                  <h4 className="font-bold text-black">Start date :</h4>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="focus:outline-none focus:ring-0 focus:border-none"
                  />
                </div>

                <span className="text-gray-600 font-medium">to</span>

                <div className="cursor-pointer flex flex-row justify-center items-center gap-4 border-2 border-[#cfdde5] rounded-lg px-2  h-[32px] text-[#0a3ca2] font-semibold">
                  {" "}
                  <h4 className="font-bold text-black">End date :</h4>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="focus:outline-none focus:ring-0 focus:border-none"
                  />
                </div>

                {/* Chart Type Tabs */}
                <div className="flex items-center rounded-lg border-2 border-[#cfdde5] overflow-hidden">
                  {chartTabs.map((tab, index) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveChart(tab.id)}
                      className={`
                        px-2 py-1 cursor-pointer
                        ${
                          index !== chartTabs.length - 1
                            ? "border-r border-[#cfdde5]"
                            : ""
                        }
                        ${
                          activeChart === tab.id
                            ? "bg-[#0a3ca2] text-white"
                            : "text-[#555b6c]"
                        }
                      `}
                    >
                      {tab.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {loading && !isReady && (
              <div className="flex justify-center items-center h-[40vh]">
                <Loader />
              </div>
            )}

            {error && (
              <div className="flex justify-center items-center h-[40vh] text-red-600 font-semibold">
                Failed to load cost data
              </div>
            )}

            {!loading && !error && (
              <>
                <div className="p-4">
                  <Chart
                    data={data}
                    startDate={startDate}
                    endDate={endDate}
                    type={
                      chartTabs.find((chart) => chart.id === activeChart)?.type
                    }
                  />
                </div>

                <div className="rounded-lg p-5 mx-4 my-3 bg-[#dbe6f8] flex justify-center items-center border-2 border-[#869bc3] text-[#0a3ca2]">
                  We are showing up to top 1000 records by cost.
                </div>

                <CostTable
                  selectedFilter={selectedFilter}
                  data={data}
                  startDate={startDate}
                  endDate={endDate}
                />
              </>
            )}
          </div>

          {filterButton && (
            <div className="w-[320px] shrink-0 bg-[#f8f8f8] border-l border-[#e6e6e6]">
              <FiltersPanel
                draftFilters={draftFilters}
                setDraftFilters={setDraftFilters}
                onApply={(filtersForApi) => {
                  setDraftFilters(filtersForApi);
                  setAppliedFilters(filtersForApi);
                }}
                onCancel={() => {
                  setDraftFilters(appliedFilters);
                  setFilterButton(false);
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CostExplorer;
