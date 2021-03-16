
function makeCalculator() {
  const calc = {
    result: 0,

    operate(callback, x) {
      callback(x);

      return this;
    },

    add(num) {
      this.result += Math.abs(num);
    },

    subtract(num) {
      this.result -= Math.abs(num);
    },

    divide(num) {
      this.result /= Math.abs(num);
    },

    multiply(num) {
      this.result *= Math.abs(num);
    },

    reset() {
      this.result = 0;
    },
  };

  for (const key in calc) {
    if (typeof calc[key] === 'function') {
      calc[key] = calc[key].bind(calc);
    }
  }

  return calc;
}
calculator = makeCalculator();
calculator.operate(calculator.add, 3);


