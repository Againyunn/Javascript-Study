function solution(maps) {
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  let start = [0, 0];

  let queue = new Queue();

  let visited = maps.map((v, row) => {
    // S(시작점)의 좌표 찾아서 start에 할당
    const col = v.indexOf("S");
    if (col >= 0) {
      start = [row, col];
    }
    return Array(v.length).fill(false); // visited 를 false로 초기화
  });

  visited[start[0]][start[1]] = true; // start 위치는 방문했으므로 true 처리
  queue.enqueue({ row: start[0], col: start[1], length: 0, open: false });

  while (!queue.isEmpty()) {
    let { row, col, length, open } = queue.dequeue();

    // 레버가 위치한 행렬의 위치를 찾으면 visited를 false로 초기화하고 E를 찾을 때까지 다시 탐색
    if (maps[row][col] === "L") {
      visited = maps.map((v) => Array(v.length).fill(false));
      visited[row][col] = true;
      open = true;
      queue = new Queue();
    }

    // E(exit)를 찾았으므로, 탐색 종료
    if (open && maps[row][col] === "E") {
      return length;
    }

    // L과 E가 아닌 경우(보통 길인 경우)
    for (let i = 0; i < 4; i++) {
      const nr = row + dy[i];
      const nc = col + dx[i];

      // 탐색 범위값 내에서 탐색(dx,dy) + 방문x인 길(false)만 탐색 + 길인 경우(X가 아닌 경우)
      if (
        isValidWay(nr, nc, maps) &&
        !visited[nr][nc] &&
        maps[nr][nc] !== "X"
      ) {
        visited[nr][nc] = true;
        queue.enqueue({ row: nr, col: nc, length: length + 1, open }); // row, col은 현재의 위치로 업데이트 + length는 +1
      }
    }
  }

  return -1;
}

// 큐 클래스 생성
class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(val) {
    this.queue[this.rear++] = val;
  }

  dequeue() {
    const val = this.queue[this.front];
    delete this.queue[this.front++];
    return val;
  }

  isEmpty() {
    return this.rear === this.front;
  }
}

// 탐색가능한 길(좌표)인지 식별
function isValidWay(nr, nc, maps) {
  const MAX_R = maps.length;
  const MAX_C = maps[0].length;

  return nr > -1 && nc > -1 && nr < MAX_R && nc < MAX_C;
}
