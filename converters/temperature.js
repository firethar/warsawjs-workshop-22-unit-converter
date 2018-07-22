'use strict';

// Write a function to convert between degrees
// Celsius, Fahrenheit and Kelvin.
//
// Example values:
//   value = 10
//   from = 'F'
//   to = 'C'
//
// Return the result of conversion.

const temperature = (value, from, to) => {
  if (from === 'K' && to === "C"){
    return value - 273.15;
  }
  if (from === 'C' && to === "K"){
    return value + 273.15;
  }
  if (from === 'F' && to === 'C') {
    return Math.round((5 / 9) * (value - 32));
  }
  if (from === 'K' && to === 'F') {
    return Math.round(value * 9 / 5 - 459.67);
  }
  if (from === to) {
    return value;
  }
  return 0;
};

module.exports = {
  temperature,
};
