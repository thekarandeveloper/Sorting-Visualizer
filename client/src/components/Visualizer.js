import React, { useState } from 'react';
import { bubbleSort, quickSort } from '../utils/sortingAlgorithms';

const Visualizer = () => {
    const generateRandomArray = (size) => {
        return Array.from({ length: size }, () => Math.floor(Math.random() * 100));
      };
  const [array, setArray] = useState(generateRandomArray(50));
  const [isSorting, setIsSorting] = useState(false);
  const [algorithm, setAlgorithm] = useState('bubble');

  

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
    <div>
      <h1>Sorting Algorithm Visualizer</h1>
      <div>
        <button onClick={() => setArray(generateRandomArray(50))} disabled={isSorting}>Generate New Array</button>
        <button onClick={handleSort} disabled={isSorting}>Sort</button>
        <select onChange={(e) => setAlgorithm(e.target.value)} value={algorithm} disabled={isSorting}>
          <option value="bubble">Bubble Sort</option>
          <option value="quick">Quick Sort</option>
        </select>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {array.map((value, index) => (
          <div
            key={index}
            style={{
              width: '10px',
              height: `${value * 2}px`,
              backgroundColor: 'blue',
              margin: '1px',
              display: 'inline-block'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Visualizer;
