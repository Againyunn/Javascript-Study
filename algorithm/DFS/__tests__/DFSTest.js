const maize = require("../maize.js");

let map = [
  ["1", "1", "1", "1", "1", "1"],
  ["e", "0", "0", "0", "0", "1"],
  ["1", "0", "1", "0", "1", "1"],
  ["1", "1", "1", "0", "0", "x"],
  ["1", "1", "1", "0", "1", "1"],
  ["1", "1", "1", "1", "1", "1"],
];

const MAIZE_SIZE = 6;

describe("maize", () => {
  test("case1", () => {
    expect(maize(map, MAIZE_SIZE)).toEqual(true);
  });
});
