const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mult = (num1, num2) => num1 * num2;
const div = (num1, num2) => (num2 === 0 ? 'Não é possível divisão por zero!' : num1 / num2);


function foo(){
  return 'foo';
};

function bar(){
  return 'bar';
};

export { sum, sub, mult, div };
