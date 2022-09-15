const validateIsNumBetween = (value, min, max) =>
  value > max || value < min || isNaN(value)
    ? `Error!! Please enter a number between ${min} and ${max}`
    : true

exports.validateIsNumBetween = validateIsNumBetween
