import React, { useState } from "react";
import AWSTable from "../../components/AWSTable";
import { serviceTableConfig } from "../../utils/awsData";

const AwsExplorer = () => {
  const [isSelected, setSelected] = useState("EC2");

  const AWSServices = [
    { id: "1", name: "EC2" },
    { id: "2", name: "RDS" },
    { id: "3", name: "ASZ" },
  ];


  const { columns = [], rows = [] } =
    serviceTableConfig[isSelected] || {};

  return (
    <div>
      <div className="m-10 flex flex-col gap-8">
        <h1 className="font-bold text-4xl">Scheduler</h1>

        <div className="flex flex-row gap-1">
          {AWSServices.map((service) => (
            <span
              key={service.id}
              onClick={() => setSelected(service.name)}
              className={`
                block font-semibold px-6 py-3 border border-[#cfdde5]
                cursor-pointer hover:bg-[#0a3ca2] hover:text-white
                ${
                  isSelected === service.name
                    ? "bg-[#0a3ca2] text-white"
                    : "bg-white"
                }
              `}
            >
              {service.name}
            </span>
          ))}
        </div>
      </div>

   
      <AWSTable columns={columns} rows={rows} />
    </div>
  );
};

export default AwsExplorer;
