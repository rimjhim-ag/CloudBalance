import React from 'react'

const AWSTable = ({AWSdata}) => {

    const headers = ["Resource ID", "Resource Name", "Engine", "Status"];

  return (
    <div> <table className="w-[80%] border border-gray-200 rounded-lg mx-10 border-collapse">
              <thead>
                <tr className="bg-[#0a3ca2] divide-x-2 divide-white">
                  {headers.map((heading, index) => (
                    <th key={index} className="p-2 text-white">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
    
              <tbody>
                {AWSdata.map((data) => (
                  <tr
                    key={data.id}
                    className="odd:bg-white  text-center even:bg-[#f8f7fc] divide-x-2 divide-white"
                  >
                    <td className="p-3">{data.name}</td>
                    <td>{data.engine}</td>
                    <td>{data.region}</td>
                    <td>
                      <span className=" font-semibold  text-lg px-3 py-1 ">
                        {data.status}
                      </span>
                    </td>
                   
                  </tr>
                ))}
              </tbody>
            </table></div>
  )
}

export default AWSTable