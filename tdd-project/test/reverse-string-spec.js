const chai = require("chai");
const spies = require("chai-spies");
const expect = chai.expect;
chai.use(spies);
const reverseString = require("../problems/reverse-string");


describe("reverse-string", () => {
  it("should return string with letters reversed", () => {
    let res = reverseString("fun");
    let expected = "nuf";
    expect(res).to.eql(expected);
  });
  it("should throw an error if the input is not a string", () => {
    expect(() => reverseString(2).to.throw(TypeError));
  });
});
