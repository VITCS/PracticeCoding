const EventEmitter = require("events");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on("Create order", () => {
  console.log("Order has been created");
});

myEmitter.on("Create order", () => {
  console.log("Order has been created");
});

myEmitter.emit("Create order");
