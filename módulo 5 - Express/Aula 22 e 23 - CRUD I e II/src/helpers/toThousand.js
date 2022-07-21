const toThousand = function (digits) {
  const everyThirdDigit = /\B(?=(\d{3})+(?!\d))/g; // expressão regular
  return digits.toString().replace(everyThirdDigit, ".");
}

module.exports = toThousand;