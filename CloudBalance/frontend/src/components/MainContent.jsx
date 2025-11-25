import React from 'react'

const MainContent = ({children}) => {
  return (
    <div className='flex-1 bg-gray-200 h-screen overflow-y-auto'>
      {children}
    </div>
  )
}

export default MainContent