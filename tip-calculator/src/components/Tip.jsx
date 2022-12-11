import React from 'react'
import { useState } from 'react';

const Button = ((props) =>{
  const [tip, setTip] = useState(0); //number
 
 function handleTip(e){
     if(e){
         e.preventDefault();
     }
    setTip(e.target.value);
    console.log(tip);
 }
 function customInput(e) {
  setTip(e.target.value)
  console.log(e.value);
 }
return(
 <div className="flex justify-between flex-col gap-5 ">
  
    <div className='flex justify-evenly flex-1 items-center gap-4 text-white'>
      <button value={0.05} onClick={handleTip}>5%</button>
      <button value={0.10} onClick={handleTip}>10%</button>
      <button value={0.15} onClick={handleTip}>15%</button>
    </div>
    <div className='flex justify-between items-center gap-4 text-white'>
      <button value={0.25} onClick={handleTip}>25%</button>
      <button value={0.50} onClick={handleTip}>50%</button>
      <input className='text-white max-w-[76px] h-11 rounded-md ' type="number" placeholder='Custom'
      onInput={customInput}
      />
    </div>
    </div>

)
}) 

const Tip = () => {
  return (
    <div>
       <div className="flex">
            <h1>Select Tip %</h1>
        </div>
      <Button />
    </div>
  )
}

export default Tip