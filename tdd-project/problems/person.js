class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `${this.name} says hi.`;
  }

  visit(person) {
    return `${this.name} visited ${person.name}`;
  }

  switchVisit(person) {
    return person.visit(this);
  }

  update(person) {
    if (typeof person !== "object") {
      throw new TypeError("Must be an object!");
    }
    if (person.name === null || person.age === null) {
      throw new TypeError("Must have name and age properties!");
    }
    this.name = person.name;
    this.age = person.age;
  }

  tryUpdate(person) {
    try {
      this.update(person);
      return true;
    } catch (e) {
      return false;
    }
  }

  static greetAll(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      newArray.push(array[i].sayHello());
    }
    return newArray;
  }

}

module.exports = Person;
