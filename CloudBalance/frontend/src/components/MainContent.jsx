import React from 'react'

const MainContent = ({children}) => {
  return (
    <div className='flex-1 bg-gray-300 '>
      {children}
    </div>
  )
}

export default MainContent