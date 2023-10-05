let name = {
  firstname: "Lokanath",
  lastname: "Jakkilinki",
};

let printFullName = function (hoemtown, state) {
  console.log(
    this.firstname + " " + this.lastname + " from " + hoemtown + state
  );
};

let name2 = {
  firstname: "Nishaal",
  lastname: "Jakkilinki",
};

//function borrowing
printFullName.call(name, "hyderabad", "Telangana");
printFullName.apply(name2, ["hyderabad", "Telangana"]);

//bind method

let printMyName = printFullName.bind(name2, "Vizag", "Andhra pradesh");
console.log(printMyName);
printMyName();
