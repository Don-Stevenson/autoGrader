const validateSkew = value => {
  if (value > 4 || value < 0 || isNaN(value)) {
    return "Error!! Please enter a number between 0 and 4";
  } else return true;
};

exports.validateSkew = validateSkew;
