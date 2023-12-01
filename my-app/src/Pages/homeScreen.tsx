import React from 'react'
import userHook from '../Hook/userHook'



const homeScreen = () => {
  const {data}: any = userHook();
  return (
    <div className='w-[100%] h-[90vh] bg-neutral-400 text-[25px] font-bold'>Welcome{data?. userName}</div>
  )
}

export default homeScreen;