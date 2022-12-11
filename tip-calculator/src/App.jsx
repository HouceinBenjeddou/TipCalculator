import PeopleCount from './components/PeopleCount'
import Tip from './components/Tip'
import Bill from './components/Bill'
import Summary from './components/Summary'
import React from 'react'
import './index.css'



function App() {
  return (
    <section className=' font-medium rounded-lg container mx-auto py-8 flex justify-center max-w-[760px] 
     bg-white px-6 my-6 inset-y-20 relative'>
        <div className='relative text-gray-500 flex justify-between items-start  flex-col py-20 px-5 border mx-1 rounded-md'>
          <Bill  />
          <Tip />
          <PeopleCount />
        </div>
        <div className=' relative align-top flex text-white justify-center 
              items-center text-left flex-col  p-24 mx-1 bg-slate-600 rounded-md'>
          <Summary />
        </div>
    </section>
  )
}

export default App
