import React from "react";
import AssessmentIcon from "@mui/icons-material/Assessment";
import TimelineIcon from "@mui/icons-material/Timeline";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import CopyToClipboard from "../../components/CopyToClipboard";
import IAMStep5 from "../../assets/IAMStep5.png";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import CURImage1 from "../../assets/CURImage1.png";
import CURImage2 from "../../assets/CURImage2.png";
import CURImage3 from "../../assets/CURImage3.png";
import CURImage4 from "../../assets/CURImage4.png";
import LoopSharpIcon from '@mui/icons-material/LoopSharp';

const StepsCount = ({ children }) => (
  <div className="shrink-0 rounded-full bg-[#A0A0A0] w-8 h-8 flex justify-center items-center text-white">
    {children}
  </div>
);

const StepItem = ({ number, children }) => (
  <div className="flex flex-row gap-3">
    <StepsCount>{number}</StepsCount>
    <div className="flex-1">{children}</div>
  </div>
);

const CreateCUR = ({onBack, handleSubmit, loading}) => {
 

  return (
    <div className="h-[90%] overflow-auto px-10 py-6">
      <div className="my-10">
        <h1 className="font-bold text-3xl">Create Cost & Usage Report</h1>
        <p className="mt-2">
          Create a Cost & Usage Report by following these steps
        </p>
      </div>

      {/* Main Steps Box */}
      <div className="bg-white px-6 py-9 flex flex-col gap-5 rounded-md shadow-md">
        <StepItem number="1">
          Go to{" "}
          <Link className="font-bold text-[#0a3ca2] underline">
            Cost and Usage Reports
          </Link>{" "}
          in the Billing Dashboard and click on{" "}
          <span className="font-bold">Create report</span>.
        </StepItem>

        <StepItem number="2">
          Name the report as shown below and select the{" "}
          <span className="font-bold">Include resource IDs</span> checkbox
        </StepItem>

        <CopyToClipboard data="ck-tuner-275495855473-hourly-cur" />

        <div className=" mx-12">
          <p className="  text-xs text-gray-700">
            Ensure that the following configuration is checked
          </p>

          <div className=" px-3 mt-3 flex items-center gap-2">
            <input
              type="checkbox"
              checked
              disabled
              className="cursor-not-allowed"
            />
            <span className="text-sm font-bold">Include Resource IDs</span>
          </div>

          <p className="text-sm  mt-10 mb-6">
            Click on <span className="font-bold">Next</span>
          </p>

          <div className="mx-10">
            <img
              src={CURImage1}
              alt="Policy Step 10"
              className="w-auto max-w-full "
            />
          </div>
        </div>

        <StepItem number="3">
          In <span className="italic">Configure S3 Bucket, </span>
          provide the name of the S3 bucket that was created -
        </StepItem>

        <div className=" mx-12">
          <p className="  text-xs text-gray-700">
            Ensure that the following configuration is checked
          </p>

          <div className=" px-3 mt-3 flex items-center gap-2">
            <input
              type="checkbox"
              checked
              disabled
              className="cursor-not-allowed"
            />
            <span className="text-sm font-bold">
              The Following default policy will be applied to your bucket
            </span>
          </div>

          <p className="text-sm  mt-10 mb-6">
            Click on <span className="font-bold">Save</span>
          </p>

          <div className="mx-10">
            <img
              src={CURImage2}
              alt="Policy Step 10"
              className="w-auto max-w-full "
            />
          </div>
        </div>

        <StepItem number="4">
          In the <span className="italic">Delivery options, </span>
          section, enter the below-mentioned Report path prefix -
        </StepItem>

        <p className=" mx-12 text-xs text-gray-700">Report path prefix:</p>

        <CopyToClipboard data="275495855473" />

        <div className=" mx-12 mt-3">
          <p className="  text-xs text-gray-700 mb-2">
            Additionally, ensure that the following checks are in place
          </p>

          <p className="  text-xs text-gray-700">Time granularity:</p>

          <div className=" px-3 mt-3 flex items-center gap-2 mb-6">
            <input
              type="radio"
              checked
              disabled
              className="cursor-not-allowed"
            />
            <span className="text-sm font-bold">Hourly</span>
          </div>

          <p className="  text-xs text-gray-700">
            Please make sure these checks are Enabled in Enable report data
            integration for:
          </p>

          <div className=" px-3 mt-3 flex items-center gap-2 mb-6">
            <input
              type="checkbox"
              checked
              disabled
              className="cursor-not-allowed"
            />
            <span className="text-sm font-bold">Amazon Athena</span>
          </div>

          <div className="mx-10">
            <img
              src={CURImage4}
              alt="Policy Step 10"
              className="w-auto max-w-full "
            />
          </div>
        </div>

        <StepItem number="5">Click on <span className="font-bold">Next.   </span> Now, review the configuration of the Cost and Usage Report. Once satisfied, click on 
        <span className="font-bold"> Create Report</span> </StepItem>
      </div>

      {/* Footer Buttons */}
      <div className="mt-6 flex justify-end gap-4">
        <Button  event={onBack} variant="primary" padding="px-8 py-2" margin="m-2">
         Back - Attach IAM Policy 
        </Button>
        <Button
         
          variant="secondary"
          padding="px-8 py-2"
          margin="m-2"
          event={handleSubmit}
          type="submit"
        >
          {loading ?  <LoopSharpIcon/> :"Submit"}
        </Button>
      </div>
    </div>
  );
};

export default CreateCUR;
