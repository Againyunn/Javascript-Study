// 상 하 좌 우
dy = [-1, 1, 0, 0];
dx = [0, 0, -1, 1];

function solution(maps) {
  let answer = [];
  let matrix = [];

  maps.forEach((row) => {
    matrix.push(row.split(""));
  });

  let mapX = matrix.length - 1;
  let mapY = matrix[0].length - 1;

  for (let i = 0; i <= mapX; i++) {
    for (let j = 0; j <= mapY; j++) {
      let landNum = matrix[i][j];
      landNum = Number(landNum);

      // 방문 확인
      if (landNum === "X") continue;

      // 방문 처리
      matrix[i][j] = "X";

      // 큐 생성
      let queue = [[i, j]];

      while (queue.length !== 0) {
        // 큐 가져오기(기존 큐에서는 가장 앞의 원소 제거)
        let [x, y] = queue.shift();

        // 상 하 좌 우 체크
        for (let i = 0; i < 4; i++) {
          let [nx, ny] = [x + dx[i], y + dy[i]];

          // 범위를 벗어나는 경우
          if (0 > nx || nx > mapX || 0 > ny || ny > mapY) continue;

          let nv = matrix[nx][ny];

          // 방문 확인
          if (nv === "X") continue;

          // 방문 처리
          matrix[nx][ny] = "X";

          landNum += Number(nv);

          // 큐 추가
          queue.push([nx, ny]);
        }
      }

      answer.push(landNum);
    }
  }

  if (answer.length === 0) return [-1];

  // 결과 정렬
  answer.sort((a, b) => a - b);

  return answer;
}
