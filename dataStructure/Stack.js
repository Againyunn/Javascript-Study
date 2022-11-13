let top = [];

// 공백상태 검사
export function isEmpty() {
  return top.length === 0;
}

// 삽입 연산
export function pushItem(item) {
  top.push(item); // 마지막 항목으로 원소 추가
}

// 삭제 연산
export function deleteItem() {
  let poppedItem = top.pop(); // 마지막 항목의 원소 제거
  return poppedItem;
}

// 가장 마지막에 추가한 원소 반환
export function peekItem() {
  if (!isEmpty()) {
    return top[top.length - 1];
  }
}

// 스택의 크기 구하기
export function size() {
  return top.length;
}

// 스택 초기화
export function clear() {
  top = [];
}
