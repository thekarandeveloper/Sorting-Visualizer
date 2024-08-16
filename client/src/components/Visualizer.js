import React, { useState } from 'react';
import { bubbleSort, quickSort } from '../utils/sortingAlgorithms';
import { GrPowerReset } from "react-icons/gr";
const Visualizer = () => {
    const generateRandomArray = (size) => {
        return Array.from({ length: size }, () => Math.floor(Math.random() * 100));
      };
  const [array, setArray] = useState(generateRandomArray(50));
  const [isSorting, setIsSorting] = useState(false);
  const [algorithm, setAlgorithm] = useState('bubble');
  const algorithms = ["bubble", "quick"]
  

  const handleSort = async () => {
    setIsSorting(true);
    if (algorithm === 'bubble') {
      await bubbleSort(array, setArray);
    } else if (algorithm === 'quick') {
      await quickSort(array, setArray);
    }
    setIsSorting(false);
  };

  return (
    <div  className='flex w-full h-full'>
    
     <section className='w-[70%] bg-[#f7f7f7] p-8 border rounded-xl justify-between flex flex-col items-center'>
     <div className='w-full flex justify-end'>
     <button className='border bg-slate-50 rounded-full p-4 border-[#c9c9c9]' onClick={() => setArray(generateRandomArray(50))} disabled={isSorting}><GrPowerReset /></button>
     </div>
     <div className='w-full'>
        {array.map((value, index) => (
          <div
            key={index}
            style={{
              width: '1.7%',
              height: `${value * 2}px`,
              backgroundColor: '#2063ff',
              margin: '1px',
              display: 'inline-block'
            }}
          />
        ))}
        <div>
        </div>
      </div>
      </section>
      <section className='flex flex-col w-[30%] bg-[#f7f7f7] p-8 border rounded-md justify-between items-center'>
     
        
        <div className='w-full'>

      {  algorithms.map((item)=> (
          <div className='w-full h-16 border border-[#d7d7d7] flex justify-start items-center rounded-xl my-4'>
              <input className='mx-4 h-4 w-4 rounded-xl' onClick={(e) => setAlgorithm(item)}  type='checkbox'></input>
              <span className='font-bold text-xl'>{item.toLocaleUpperCase()}</span>
          </div>
      ))}
      
        </div>
       
        <div className='bottom-0 w-full h-16'>
        <button className='rounded-md w-[100%] bg-[#2063ff] text-white h-full text-xl font-medium' onClick={handleSort} disabled={isSorting}>Sort</button>
        </div>
       
      </section>
     
    </div>
  );
};

export default Visualizer;
