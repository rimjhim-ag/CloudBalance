import React from "react";
import AssessmentIcon from "@mui/icons-material/Assessment";
import TimelineIcon from "@mui/icons-material/Timeline";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import CopyToClipboard from "../../components/CopyToClipboard";
import IAMStep5 from "../../assets/IAMStep5.png";
import Button from "../../components/Button";
import { StepItem } from "../../components/Steps";
import { toast } from "react-toastify";



const IAMRole = ({onNext, formData, handleChange, isRoleAdmin}) => {

   const inputCheck = (value) =>{
       
      const checkValidation = value?.match(/\D+/);
  return checkValidation !== null;
       
   }


   const handleNext = () =>{

       
      if(inputCheck(formData?.accountId) === false){
           onNext()
      }
     
   }
    

 

  return (
    <div className="h-[90%] overflow-auto px-10 py-6">
    

<div className="my-10"><h1 className="font-bold text-3xl">Create an IAM Role</h1>
        <p className="mt-2">Create an IAM Role by following these steps</p></div>
    


      {/* Main Steps Box */}
      <div className="bg-white px-6 py-9 flex flex-col gap-5 rounded-md shadow-md">
        

        <StepItem number="1">Log into AWS account</StepItem>

        <StepItem number="2">
          In the <span className="italic">Trusted entity type</span> section, select{" "}
          <span className="font-bold">Custom trust policy</span>. Replace the prefilled policy
          with the policy provided below:
        </StepItem>

        <CopyToClipboard
          isCode
          data={`{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::951485052809:role/ck-tuner-nonprod-transitive-role"
      },
      "Action": "sts:AssumeRole",
      "Condition": {
        "StringEquals": {
          "sts:ExternalId": "MU1HX0RFRkFVTFQwMzM5NTZlYS1kMDE3LTRjYmQtYjY3ZS1jMGI4NWJjY2U4Yzk="
        }
      }
    },
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "s3.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}`}
        />

        <StepItem number="3">
          Click on <span className="font-bold">Next</span> to go to the{" "}
          <span className="italic">Add permissions page</span>. We would not be adding any permissions for now.
        </StepItem>

        <StepItem number="4">
          In the <span className="italic">Role name field</span>, enter the below-mentioned role name, and click{" "}
          <span className="font-bold">Create Role</span>:
        </StepItem>

        <CopyToClipboard data="CK-Tuner-Role-dev2" />

        <StepItem number="5">Go to the newly created IAM Role and copy the Role ARN:</StepItem>

        <div className="mx-10">
          <img src={IAMStep5} alt="IAM Step 5" className="w-auto max-w-full rounded-md" />
        </div>

        <StepItem number="6">Paste the copied Role ARN below:</StepItem>


<div className="flex flex-row gap-6 w-full">
  <div className="mx-10 flex flex-col gap-4 w-full">
    <label className="text-sm">
      Enter the IAM Role ARN <span className="text-red-600">*</span>
    </label>
    <input
      className="w-full border border-[#e6e6e6] p-4 text-sm rounded-md"
      placeholder="Enter the IAM Role ARN"
       value={formData?.ARN || ""}
       onChange={handleChange}
       name="ARN"
    />
  
  </div>

  <div className="mx-10 flex flex-col gap-4 w-full">
    <label className="text-sm">
      Enter Account Name <span className="text-red-600">*</span>
    </label>
    <input
      className="w-full border border-[#e6e6e6] p-4 text-sm rounded-md"
      placeholder="Enter Account Name"
      value={formData?.accountName || ""}
      name="accountName"
       onChange={handleChange}
      
    />
  </div>

  <div className="mx-10 flex flex-col gap-4 w-full">
    <label className="text-sm">
      Enter Account Id <span className="text-red-600">*</span>
    </label>
    <input
      className="w-full border border-[#e6e6e6] p-4 text-sm rounded-md"
      placeholder="Enter Account Id"
      name="accountId"
      pattern=""
      value={formData?.accountId || ""}
       onChange={handleChange}
      
    />
  </div>
</div>

        
      </div>

      {/* Footer Buttons */}
      <div className="mt-6 flex justify-end gap-4">
      
        <Button event={handleNext} disabled={!isRoleAdmin } variant="filled" padding="px-8 py-2" margin="m-2">
          Next - Add Customer Managed Policies
        </Button>
      </div>
    </div>
  );
};

export default IAMRole;
