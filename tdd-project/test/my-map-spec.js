const chai = require("chai");
const spies = require("chai-spies");
const expect = chai.expect;
chai.use(spies);
const { myMap, double } = require("../problems/my-map");
const assert = require("assert");


describe("myMap", () => {
  let array;
  beforeEach("set up array", () => {
    array = [1, 2, 3];
  });
  it("should not mutate original array", () => {
    let arrayOrig = array.slice();
    let res = myMap(array, double);
    expect(array).to.eql(arrayOrig);
  });
  it("should not call Array#map", () => {
    const mapSpy = chai.spy(array.map(double));
    expect(mapSpy).to.have.been.called.exactly(0);
  });
  it("should call callback once for each element", () => {
    const cbSpy = chai.spy(double);
    myMap(array, cbSpy);
    let arrayLength = array.length;
    expect(cbSpy).to.have.been.called.exactly(arrayLength);
  });
});
