const validateNum = (value) => {
    if (value > 200 || value < 0 || isNaN(parseFloat(value))) {
      return "Error!! Please enter a whole number between 0 and 150";
    } else return true;
  };


  exports.validateNum = validateNum