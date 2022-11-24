// 반복문으로 이진탐색 구현
export function BinarySearch(arr, key, low, high) {
  while (low <= high) {
    let middle = (low + high) / 2;

    if (key === arr[middle]) {
      return middle;
    } else if (key > arr[middle]) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }

  return false;
}

// 재귀로 이진탐색 구현
export function BinarySearchRecursive(arr, key, low, high) {
  if (low <= high) {
    let middle = (low + high) / 2;

    if (key === arr[middle]) {
      return middle;
    } else if (key > arr[middle]) {
      return BinarySearchRecursive(arr, key, middle + 1, high);
    } else return BinarySearchRecursive(arr, key, low, middle - 1);
  }

  return false;
}
