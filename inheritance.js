class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
  }
}

class Model extends Car {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }
  show() {
    return this.present() + "it is a " + this.model;
  }
}

let myCar = new Model("Ford", "Mustang");
console.log(myCar.show());
