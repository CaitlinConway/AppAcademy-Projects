const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);
const assert = require("assert");
const Person = require("../problems/person");

describe("Person", () => {
  let jake;
  let mai;
  beforeEach("construct", () => {
    jake = new Person("Jake", 10);
    mai = new Person("Mai", 15);
  });
  describe("constructor", () => {
    it("checks if name and age exists", () => {
      expect(jake).to.have.property("name");
      expect(jake).to.have.property("age");
      expect(jake.name).to.eql("Jake");
      expect(jake.age).to.eql(10);
    });
  });
  describe("hello prototype", () => {
    it("returns greeting with persons name", () => {
      let res = jake.sayHello();
      let expected = "Jake says hi.";
      expect(res).to.eql(expected);
    })
  });
  describe("visit prototype", () => {
    it("should return a string saying this person visited passed in person", () => {
      let res = jake.visit(mai);
      let expected = "Jake visited Mai";
      expect(res).to.eql(expected);
    })
  })
  describe("switch visit prototype", () => {
    it("returns a string where other person visits this person", () => {
      let res = jake.switchVisit(mai);
      let expected = "Mai visited Jake";
      expect(res).to.eql(expected);
    })
  })
  describe("prototype.update", () => {
    context("argument is valid obj", () => {
      it("should update the persons properties to match passed in values", () => {
        jake.update(mai);
        expect(jake.name).to.eql("Mai");
        expect(jake.age).to.eql(15);
      })
    })
    context("argument is invalid obj", () => {
      it("should throw a Type Error", () => {
        assert(() => jake.update("Mai").throws(), TypeError)
      })
    });
    context("argument is valid but missing name or age", () => {
      it("should throw a Type Error due to missing property", () => {
        let Bob = new Person("Bob", 47);
        delete Bob.name;
        delete Bob.age;
        assert(() => jake.update(Bob).throws(), TypeError)
      })
    })
  })
  describe("prototype.tryUpdate", () => {
    context("if prototype update is successful", () => {
      it("should return true", () => {
        let res = jake.tryUpdate(mai);
        expect(res).to.be.true;
      });
    })
    context("if prototype update is unsuccessful", () => {
      it("should return false", () => {
        let res = jake.tryUpdate("Mai");
        expect(res).to.be.false;
      });
    })
  })
  describe("greetAll", () => {
    it("should call sayHello on each person in array, return array of stored strings", () => {
      let res = Person.greetAll([jake, mai]);
      let expected = ["Jake says hi.", "Mai says hi."];
      expect(res).to.eql(expected);
    })
  })
})
