const prompts = require("prompts")

// helpers
// **********
const validateNum = value => {
  if (value > 150 || value < 0 || isNaN(parseFloat(value))) {
    return "Error!! Please enter a whole number between 0 and 150"
  } else return true
}

const randomGradeGenerator = value => {
  let r = 0
  for (let i = value; i > 0; i--) {
    r += Math.random()
  }
  return `${((r / value)*100).toFixed(1)}%`
}

;(async () => {
  const response = await prompts({
    type: "number",
    name: "value",
    initial: `number of papers to be marked`,
    message: `
    * Welcome to AutoGrader! *
    **************************
    
    A program to help you mark when you're feeling like, 
    "fuck it, Imma throw these papers down the stairs
    and assign marks based on where they land", 
    but wisely remember, these papers are digital 
    and I still need my laptop"
  
    First, how many papers do you need to mark?`,
    validate: value => validateNum(value),
  })

  console.log(response.value) // => { value: 24 }
})()
