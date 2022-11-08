// 문자.charCodeAt(0) : 문자 -> 아스키코드
// String.fromCharCode(아스키코드) : 아스키코드 -> 문자

function problem4(word) {
  let wordScope = "az"; // a : 97, z : 122 /110
  let target = [...word];
  let result = [];

  target.map((el) => {
    let rareNum = el.charCodeAt(0);

    let returnNum = " ";

    if (el !== " " && !isNaN(rareNum)) {
      let resultASCI;
      if (rareNum >= 97) {
        resultASCI = 96 + Math.abs(26 - (rareNum - 97));
      } else {
        resultASCI = 64 + Math.abs(26 - (rareNum - 65));
      }

      returnNum = String.fromCharCode(resultASCI);
    }

    result.push(returnNum);
  });

  return result.join("");
}

module.exports = problem4;
