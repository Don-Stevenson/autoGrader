const prompts = require("prompts")

// helpers
// **********
const validateNum = value => {
  if (value > 150 || value < 0 || isNaN(parseFloat(value))) {
    return "Error!! Please enter a whole number between 0 and 150"
  } else return true
}

const randn_bm =()=> {

  let u = 0, v = 0;
  while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
  while(v === 0) v = Math.random();
  let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
  num = num / 10.0 + 0.5; // Translate to 0 -> 1
  if (num > 1 || num < 0) return randn_bm() // resample between 0 and 1
  if (num < .20) return `<20 ${(num * 100+25).toFixed(1)}%`

  // Skew to avoid complaints of low grades
  if (num > .2 && num <= .45 ) return `>20 <45 ${(num * 100+20).toFixed(1)}%`
  if (num > .45 && num <= .64 ) return `>45 <64 ${(num * 100+15).toFixed(1)}%`
  if (num > .65 && num <= .75 ) return `>65 <75 ${(num * 100+10).toFixed(1)}%`
  if (num > .75 && num <= .85 ) return `>75 <85 ${(num * 100+5).toFixed(1)}%`
  if (num > .85 && num <= .98 ) return `>85 <98 ${(num * 100+2).toFixed(1)}%`
}




;(async () => {
  const response = await prompts({
    type: "number",
    name: "noOfPapers",
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
    validate: noOfPapers => validateNum(noOfPapers),
  })

  const finalGradesGenerator = () => {
    let finalGradesObj = {}
    for (let i = 1; i <= response.noOfPapers; i++) {
      finalGradesObj[i]= randn_bm()
        }
    return finalGradesObj
  
  }
  console.log(finalGradesGenerator())
  console.log(response.noOfPapers) // => { value: 24 }
})()
