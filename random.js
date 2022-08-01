const randn_bm =()=> {
//     let r = 0
//     for (let i = value; i > 0; i--) {
//       r += Math.random()
//     }
//     if (r / value * 100 <= 50) return `here ${((r / value) * 100+ 20).toFixed(1)}%`
//     return `${((r / value) * 100).toFixed(1)}%`
//   }

  
    let u = 0, v = 0;
    while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
    num = num / 10.0 + 0.5; // Translate to 0 -> 1
    if (num > 1 || num < 0) return randn_bm() // resample between 0 and 1
    if (num < .20) return `<20 ${(num * 100+25).toFixed(1)}%`
    if (num > .2 && num <= .45 ) return `>20 <45 ${(num * 100+20).toFixed(1)}%`
    if (num > .45 && num <= .64 ) return `>45 <64 ${(num * 100+15).toFixed(1)}%`
    if (num > .65 && num <= .75 ) return `>65 <75 ${(num * 100+10).toFixed(1)}%`
    if (num > .75 && num <= .85 ) return `>75 <85 ${(num * 100+5).toFixed(1)}%`
    if (num > .85 && num <= .98 ) return `>85 <98 ${(num * 100+2).toFixed(1)}%`
  }



  console.log(randn_bm());