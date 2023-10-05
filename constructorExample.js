class Car {
  constructor(vehcile) {
    this._vehcile = vehcile;
  }
  move() {
    console.log("drive", this._vehcile);
  }
}

class Bike {
  constructor(vehcile) {
    this._vehcile = vehcile;
  }
  move() {
    console.log("bike", this._vehcile);
  }
}

function getVehcile(vehcile) {
  switch (vehcile.type) {
    case "car":
      return new Car(vehcile);
    case "bike":
      return new Bike(vehcile);
    default:
      break;
  }
}

console.log(
  getVehcile({
    type: "bike",
  })
);

console.log(
  getVehcile({
    type: "car",
  })
);
