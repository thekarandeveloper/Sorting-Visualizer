export const bubbleSort = async (arr, setArray, speed) => {
    let n = arr.length;
    let newArray = [...arr];
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (newArray[j] > newArray[j + 1]) {
          [newArray[j], newArray[j + 1]] = [newArray[j + 1], newArray[j]];
          setArray([...newArray]);
          await sleep(speed); 
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
  

  export const mergeSort = async (array, setArray, speed) => {
    if (array.length <= 1) return array;

    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);

    const sortedLeft = await mergeSort(left, setArray, speed);
    const sortedRight = await mergeSort(right, setArray, speed);

    return await merge(sortedLeft, sortedRight, setArray, speed);
};

const merge = async (left, right, setArray, speed) => {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex++]);
        } else {
            result.push(right[rightIndex++]);
        }
        setArray([...result, ...left.slice(leftIndex), ...right.slice(rightIndex)]);
        await sleep(speed);
    }

    return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
};

export const insertSort = async (array, setArray, speed) => {
  let newArray = [...array];
  for (let i = 1; i < newArray.length; i++) {
      let key = newArray[i];
      let j = i - 1;

      while (j >= 0 && newArray[j] > key) {
          newArray[j + 1] = newArray[j];
          j--;
          setArray([...newArray]);
          await sleep(speed);
      }
      newArray[j + 1] = key;
      setArray([...newArray]);
      await sleep(speed-100);
  }
};

export const heapSort = async (array, setArray, speed) => {
  let n = array.length;
  let newArray = [...array];

  // Build heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      await heapify(newArray, n, i, setArray, speed);
  }

  // Extract elements from heap
  for (let i = n - 1; i > 0; i--) {
      [newArray[0], newArray[i]] = [newArray[i], newArray[0]];
      setArray([...newArray]);
      await sleep(speed);
      await heapify(newArray, i, 0, setArray, speed);
  }
};

const heapify = async (arr, n, i, setArray, speed) => {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) largest = left;
  if (right < n && arr[right] > arr[largest]) largest = right;

  if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      setArray([...arr]);
      await sleep(speed);
      await heapify(arr, n, largest, setArray, speed);
  }
};



  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  