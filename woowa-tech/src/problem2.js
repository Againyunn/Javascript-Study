function problem2(cryptogram) {
  // 중복 반복 검사 제어 변수
  let quit = false;

  // 가공할 수 있는 배열의 상태로 변환
  let dataList = cryptogram.split("");

  /**
   * 현재 배열 내의 연속된 글자 제거 함수
   * @param {* array} 중복 검사할 배열
   * @returns [ 중복제거한 배열, 중복검사 종료 여부 ]
   */
  const checkDuplicate = (dataArray) => {
    let checkedArray = [];
    let prev = false;
    let type = true; // 추가 반복 필요한 경우(false 반환)
    let idx = 0;

    while (idx <= dataArray.length) {
      // 첫번째 원소는 비교 대상x이므로 prev로 지정
      if (idx === 0) {
        prev = dataArray[idx];
      }
      // 두번째 원소부터는 prev와 중복여부 검사
      else if (idx > 0) {
        // prev와 현재 원소의 값이 다른 경우(중복x)
        if (prev !== dataArray[idx]) {
          // 기존의 prev값이 존재하는 경우(직전의 원소가 중복값으로 삭제된 경우는 push 제외하기 위함)
          if (prev !== false) {
            checkedArray.push(prev);
          }
          prev = dataArray[idx];

          // prev와 현재 원소 값이 같은 경우(중복o)
        } else if (prev === dataArray[idx]) {
          prev = false;
          type = false;
        }
      }
      idx++;
    }
    return [checkedArray, type];
  };

  // 모든 중복요소가 없을 때까지 중복 검사 반복
  while (!quit) {
    returnedData = checkDuplicate(dataList);

    dataList = returnedData[0].join("");

    // checkDuplicate의 결과로 중복검사 종료(type === true)인 경우
    if (returnedData[1]) {
      quit = true;
    }
  }

  // 현재 글자가 새로운 글자인지 식별하는 함수
  return dataList;
}

module.exports = problem2;
