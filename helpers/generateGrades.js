const { randn_bm } = require("./random_bm.js");

const generateGrades = ({lowestGrade, highestGrade, noOfPapers, skew}) => {
  let finalGradesArr = [];
  for (let i = 1; i <= noOfPapers; i++) {
    finalGradesArr.push(
      randn_bm(lowestGrade, highestGrade, skew)
    );
  }
  return finalGradesArr;
};

exports.generateGrades = generateGrades;
