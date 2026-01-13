import React from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { toast } from "react-toastify";

const CopyToClipboard = ({ data, isCode = false }) => {
  const handleCopy = async (e) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(data);
      toast.success("Copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy" + err);
    }
  };

  const wrapperBase =
    "group bg-[#f6f5f5] font-bold rounded-lg hover:bg-blue-50 hover:border border-[#0a3ca2] ml-10";

  const iconWrapper =
    "cursor-pointer p-1 border border-[#0a3ca2] rounded-md  group-hover:bg-[#0a3ca2] transition-all duration-200";

  const icon =
    "text-[#0a3ca2] group-hover:text-white";

  return isCode ? (
    <pre
      onClick={handleCopy}
      className={`${wrapperBase} relative text-[#0a3ca2] h-[25vh] overflow-y-auto   p-2 text-xs`}
    >
      <div className="absolute top-2 right-2" onClick={handleCopy}>
        <div className={iconWrapper}>
          <ContentCopyIcon className={icon} fontSize="small" />
        </div>
      </div>
      {data}
    </pre>
  ) : (
    <div
      onClick={handleCopy}
      className={`${wrapperBase} flex items-center gap-2 w-[30vh] px-3 py-2 cursor-pointer text-black`}
    >
      <div className={iconWrapper}>
        <ContentCopyIcon className={icon} fontSize="small" />
      </div>
      <span className="text-sm">{data}</span>
    </div>
  );
};

export default CopyToClipboard;
