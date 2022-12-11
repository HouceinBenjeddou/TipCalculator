import React from 'react'
import { useState } from 'react'

const Bill = ({props}) => {   
    const [bill, setBill] = useState(0)

        const handleChange = ((e) =>{
            setBill(e.target.value)
         })
  return (
    <div className='text-left flex'>
        <div className="flex justify-start flex-col">
              <h1 className='text-3xl text-gray-600 my-1 bottom-16 p-1 relative '>Bill</h1>
               <input className='w-75 required  h-10 rounded-md relative bottom-16 py-2.5 mx-1.5 ' 
                  type='number'
                placeholder='$'
                min={0}
                value={bill} onChange={handleChange}
             />
        </div>
    </div>
  )
}

export default Bill