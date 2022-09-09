const validateIsNumBetween = (value, min, max) => {
  if (value > max || value < min || isNaN(value)) {
    return `Error!! Please enter a number between ${min} and ${max}`
  }
  return true
}

exports.validateIsNumBetween = validateIsNumBetween
