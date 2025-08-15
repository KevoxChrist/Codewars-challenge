//INSTRUCTIONS
// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the die and moves the number of spaces indicated by the die two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

// Example:
// move(3, 6) should equal 15

//SOLUTION
function move (position, roll) {
  // return the new position
  
  return position + roll * 2;
}

//PUESDO CODE
//Function needs to take a postion and a roll
// The roll should be multiplied by 2 and added to the specified position
// Return the output of the sum of position + roll * 2
