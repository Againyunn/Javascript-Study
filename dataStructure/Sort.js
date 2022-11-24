// 선택정렬(모든 원소를 매번 비교)
export function SelectionSort(arr) {
  let arrNum = arr.length;

  for (var i = 0; i < arrNum; i++) {
    let least = i;

    for (var j = i + 1; j < arrNum; j++) {
      if (arr[j] < arr[least]) {
        least = j;
      }
    }
    let tmp = arr[i];
    arr[i] = arr[least];
    arr[least] = tmp;
  }

  return arr;
}

// 삽입정렬(특정 인덱스의 값을 기준으로 다음 인덱스와 비교하며 순서 조정)
export function InsertionSort(arr) {
  let arrNum = arr.length;

  for (var i = 1; i < arrNum; i++) {
    let key = arr[i];

    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[i];
      j -= 1;
    }

    arr[j + 1] = key;
  }

  return arr;
}

// 버블정렬
export function BubbleSort(arr) {
  let arrNum = arr.length;

  for (var i = arrNum - 1; i >= 0; i--) {
    let changed = false;

    for (var j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        changed = true;
      }
    }

    if (!changed) break;
  }

  return arr;
}
