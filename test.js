
function makeCalculator() {
  return {
    result: 0,

    operate(callback, x) {
      callback(x);

      return this;
    },

    add(num) {
      this.result += num;
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
}
calculator = makeCalculator();
calculator.operate(calculator.add, 3);

