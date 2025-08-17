
// Description:
// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1



function sameCase(a, b){
  
  let aTrim = a.trim();
  let bTrim = b.trim();
  let regex = /^[A-Za-z]$/;

  
  
  if (!regex.test(a) || !regex.test(b)){
    return -1;
  }
  if ( isUpperCase(aTrim) && isUpperCase(bTrim) || isLowerCase(aTrim) && isLowerCase(bTrim)){
    return 1;
  }
  if(typeof aTrim === 'string' && typeof bTrim === 'string' ){
     return 0;
  }
}


function isUpperCase(char){
  
  return char === char.toUpperCase(); //Boolean 
  
}

function isLowerCase(char){
  return char === char.toLowerCase(); //Boolean
}

//My thoughts
// I found this on the practice page filitering out the level of difficulty I wanted. This problem was heavy! I learned so much from working on this challenge like separation
// of concerns, and learning how to use regex properly and matching it against another value with "test()" (I would previously use .match or .includes which is not the best). Also, I'm
//still getting used to using "typeof" which is new to me. I like that I can actually match the type of a variable against another explicitly.
