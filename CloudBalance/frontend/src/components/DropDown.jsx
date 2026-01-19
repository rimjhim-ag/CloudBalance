import React from 'react'


const DropDown = ({ name, optionsArr,  setSelected, styles }) => {
  const baseStyles = "cursor-pointer";

  return (
    <select
      value=""      
      onChange={(e) => setSelected(e.target.value)}
      className={`${baseStyles} ${styles}`}
    >
   
      <option value="" disabled hidden>{name}</option>

      {optionsArr.map((option) => (
        <option key={option.name} value={option.value} className="px-6 py-2 text-gray-600">
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default DropDown
