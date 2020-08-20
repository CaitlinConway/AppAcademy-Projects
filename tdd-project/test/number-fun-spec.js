const chai = require("chai");
const spies = require("chai-spies");
const expect = chai.expect;
chai.use(spies);
const { returnsThree, reciprocal } = require("../problems/number-fun");
const assert = require("assert");


describe("returnsThree", () => {
  it("should return 3", () => {
    let expected = 3;
    let res = returnsThree();
    assert.strictEqual(res, expected);
  })
});

describe("reciprocal", () => {
  context("valid argument", () => {
    it("should return the reciprocal of 5", () => {
      let expected = 0.2;
      let res = reciprocal(5);
      assert.strictEqual(res, expected);
    });
    it("should return the reciprocal of 10", () => {
      let expected = 0.1;
      let res = reciprocal(10);
      assert.strictEqual(res, expected);
    })
  });
  context("invalid argument", () => {
    it("should throw a Type Error", () => {
      assert.throws(() => {
        reciprocal(0)
      }, TypeError);
    })
  })
});
