import React, { useState } from "react";
import AWSTable from "../../components/AWSTable";

const AwsExplorer = () => {

  const [isSelected, setSelected] = useState("EC2");




  const awsResources = [
    {
      id: "i-0a1b2c3d4e5f",
      name: "Prod-EC2-Server",
      engine: "Amazon Linux 2",
      region: "us-east-1",
      status: "Running",
    },
    {
      id: "i-9f8e7d6c5b4a",
      name: "Staging-EC2-Server",
      engine: "Ubuntu 22.04",
      region: "ap-south-1",
      status: "Stopped",
    },
    {
      id: "i-12345abcde",
      name: "Dev-EC2-Instance",
      engine: "Amazon Linux 2023",
      region: "eu-west-1",
      status: "Running",
    },
    {
      id: "i-67890fghij",
      name: "Test-EC2-Node",
      engine: "Red Hat Enterprise Linux",
      region: "us-west-2",
      status: "Terminated",
    },
  ];





  const AWSServices = [
    { id: "1", name: "EC2" },

    { id: "2", name: "RDS" },

    { id: "3", name: "ASG" },
  ];
  return (
    <div>
      <div className="m-10 flex flex-col gap-8">
        {" "}
        <h1 className="font-bold text-4xl">Scheduler</h1>
        <div className="flex flex-row gap-1 ">
          {" "}
          {AWSServices.map((service) => (
            <span onClick={()=> setSelected(service.name)}key={service.id} className ={`  block font-semibold px-6 py-3 border border-[#cfdde5] cursor-pointer hover:bg-[#0a3ca2] hover:text-white ${isSelected === service.name ? "bg-[#0a3ca2] text-white" : "bg-white"} `}>
              {service.name}
            </span>
          ))}
        </div>
      </div>

<div>
<AWSTable AWSdata={awsResources} />

</div>

    </div>
  );
};

export default AwsExplorer;
