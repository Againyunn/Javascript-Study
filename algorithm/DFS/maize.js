// stack
let top = [];

// 공백상태 검사
function isEmpty() {
  return top.length === 0;
}

// 삽입 연산
function pushItem(item) {
  top.push(item); // 마지막 항목으로 원소 추가
}

// 삭제 연산
function deleteItem() {
  let poppedItem = top.pop(); // 마지막 항목의 원소 제거
  return poppedItem;
}

// 가장 마지막에 추가한 원소 반환
function peekItem() {
  if (!isEmpty()) {
    return top[top.length - 1];
  }
}

function maizeDFS(map, MAIZE_SIZE) {
  pushItem([0, 1]);

  console.log("DFS: ");

  while (!isEmpty()) {
    let current = deleteItem();

    let x = current[0];
    let y = current[1];

    if (map[y][x] === "x") {
      return true;
    } else {
      map[y][x] = ".";

      if (isValid(x, y - 1, MAIZE_SIZE, map)) {
        pushItem([x, y - 1]);
      }
      if (isValid(x, y + 1, MAIZE_SIZE, map)) {
        pushItem([x, y + 1]);
      }
      if (isValid(x - 1, y, MAIZE_SIZE, map)) {
        pushItem([x - 1, y]);
      }
      if (isValid(x + 1, y, MAIZE_SIZE, map)) {
        pushItem([x + 1, y]);
      }
    }

    console.log(current, " -> ", "현재 스택: ", top);
  }

  return false;
}

// 경로 탐색 유효성 검사
function isValid(x, y, MAIZE_SIZE, map) {
  if (x < 0 || y < 0 || x >= MAIZE_SIZE || y >= MAIZE_SIZE) {
    return false;
  } else {
    return map[y][x] == "0" || map[y][x] == "x";
  }
}

module.exports = maizeDFS;

// let map = [
//   ["1", "1", "1", "1", "1", "1"],
//   ["e", "0", "0", "0", "0", "1"],
//   ["1", "0", "1", "0", "1", "1"],
//   ["1", "1", "1", "0", "0", "x"],
//   ["1", "1", "1", "0", "1", "1"],
//   ["1", "1", "1", "1", "1", "1"],
// ];

// let result = maizeDFS(map, 6);
// if (result) {
//   console.log("미로 탐색 성공!");
// } else {
//   console.log("미로 탐색 실패");
// }
