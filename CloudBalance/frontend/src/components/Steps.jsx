




export const StepItem = ({ number, children }) => (
  <div className="flex flex-row gap-3">
    <div className="shrink-0 rounded-full bg-[#A0A0A0] w-8 h-8 flex justify-center items-center text-white">
    {number}
  </div>
    <div className="flex-1">{children}</div>
  </div>
);