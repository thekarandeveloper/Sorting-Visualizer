import React, { useEffect, useState } from "react";
import {
  bubbleSort,
  quickSort,
  mergeSort,
  insertSort,
  heapSort,
} from "../utils/sortingAlgorithms";
import { GrPowerReset } from "react-icons/gr";
const Visualizer = () => {
  const generateRandomArray = (size) => {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 100));
  };

 


  const [arraySize, setArraySize] = useState(10);
  const [arraySpeed, setArraySpeed] = useState(10);
  const [array, setArray] = useState(generateRandomArray(arraySize));
  const [isSorting, setIsSorting] = useState(false);
  const [algorithm, setAlgorithm] = useState("bubble");
  const algorithms = ["bubble", "quick", "merge", "insertion", "heap"];

  const handleSort = async () => {
    setIsSorting(true);

    switch (algorithm) {
      case "bubble":
        await bubbleSort(array, setArray, arraySpeed - 100);
        break;
      case "quick":
        await quickSort(array, setArray, arraySpeed  - 100);
        break;
      case "merge":
        await mergeSort(array, setArray, arraySpeed - 100);
        break;
      case "insetion":
        await insertSort(array, setArray, arraySpeed - 100);
        break;
      case "heap":
        await heapSort(array, setArray, arraySpeed - 100);
        break;
      default:
        break;
    }

    setIsSorting(false);
  };
  useEffect(() => {
    setArray(generateRandomArray(arraySize));
  }, [arraySize]);

  return (
    <div className="flex w-full h-full">
      <section className="w-[70%] bg-[#f7f7f7] p-8 border rounded-xl justify-between flex flex-col items-center">
        <div className="w-full flex justify-end">
          <button
            id="resetButton"
            className="border bg-slate-50 rounded-full p-4 border-[#c9c9c9]"
            onClick={() => setArray(generateRandomArray(50))}
            disabled={isSorting}
            style={{opacity:`${isSorting ? 0.5 : 1.0}`}}
          >
            <GrPowerReset />
          </button>
        </div>
        <div id="array-container" className="w-full flex justify-center items-end">
          {array.map((value, index) => (
            <div
              key={index}
              style={{
                width: `${70 / arraySize}%`,
                height: `${value * 2}px`,
                backgroundColor: "#EF4800",
                margin: "1px",
                display: "inline-block",
              }}
            />
          ))}
          <div></div>
        </div>
      </section>
      <section className="flex flex-col w-[30%] bg-[#f7f7f7] p-8 border rounded-md justify-between items-center" style={{opacity:`${isSorting ? 0.5 : 1.0}`}}>
        <div className="w-full flex flex-col gap-8">
          <select id="algorithm" className="flex w-full h-16 bg-[#eaeaea] px-6 rounded-xl">
            <option value="bubbleSort">Bubble Sort</option>
            <option value="mergeSort">Merge Sort</option>
            <option value="quickSort">Quick Sort</option>
            <option value="insertionSort">Insertion Sort</option>
            <option value="heapSort">Heap Sort</option>
          </select>
          <div className="flex flex-col w-full h-26 justify-between bg-[#eaeaea] p-6 rounded-xl">
            <label className="mb-4" for="arraySize">Array Size: {arraySize}</label>
            
            <input
              type="range"
              id="arraySize"
              min="10"
              max="100"
              value={arraySize}
              onChange={(e) => setArraySize(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full h-26 justify-between bg-[#eaeaea] p-6 rounded-xl">
            <label className="mb-4" for="speed">Speed: {arraySpeed}</label>
            <input
              type="range"
              id="speed"
              min="10"
              max="100"
              value={arraySpeed}
              onChange={(e) => setArraySpeed(e.target.value)}
            />
          </div>
        </div>

        <div className="bottom-0 w-full h-16">
          <button
            id="startButton"
            className="rounded-md w-[100%] bg-[#2063ff] text-white h-full text-xl font-medium"
            onClick={handleSort}
            disabled={isSorting}
            style={{opacity:`${isSorting ? 0.5 : 1.0}`}}
          >
            Sort
          </button>
        </div>
      </section>
    </div>
  );
};

export default Visualizer;
