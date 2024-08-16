export const bubbleSort = async (arr, setArray) => {
    let n = arr.length;
    let newArray = [...arr];
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (newArray[j] > newArray[j + 1]) {
          [newArray[j], newArray[j + 1]] = [newArray[j + 1], newArray[j]];
          setArray([...newArray]);
          await sleep(100); 
        }
      }
    }
  };
  
  export const quickSort = async (arr, setArray, low = 0, high = arr.length - 1) => {
    if (low < high) {
      let pi = await partition(arr, setArray, low, high);
      await quickSort(arr, setArray, low, pi - 1);
      await quickSort(arr, setArray, pi + 1, high);
    }
  };
  
  const partition = async (arr, setArray, low, high) => {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      if (arr[j] <= pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        setArray([...arr]);
        await sleep(100); 
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    setArray([...arr]);
    return i + 1;
  };
  

  export const mergeSort = async (array, setArray, speed) =>{
  
  };
  export const insertSort = async (array, setArray, speed) =>{
  
  };
  export const heapSort = async (array, setArray, speed) =>{
  
  };


  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  