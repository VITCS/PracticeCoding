function addNumber(num1, num2) {
  return Number(num1) + Number(num2);
}
function addNumber1(num1, num2) {
  return num1 + num2;
}

function addNumber3(num1, num2) {
  return num1.concat(num2);
}
console.log(addNumber("111", "222"));
console.log(addNumber1("111", "222"));
console.log(addNumber3("1", "222"));
