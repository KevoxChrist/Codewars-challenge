//Challenge 8kyu

// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."
//EXAMPLE OUTPUT
// ball1 = new Ball();
// ball2 = new Ball("super");

// ball1.ballType     //=> "regular"
// ball2.ballType     //=> "super"

class Ball{
  
  constructor(ballType){
    
    this.ballType = this.isBallType(ballType)

  }

  isBallType(ball){

    if (ball === undefined){
      return this.ballType = "regular"
    }
    else{
      return this.ballType = ball
    }

  }
  
  
}

//MY THOUGHTS
//I found this problem on the similar/suggested problems section, just below a challenge I was currently on. I felt good about this going in but had to move things around because 
//this challenge asks you to make a class but the preloaded code was a function which threw me off a bit. I went through many variations of my output and got stuck because I thought checking
// to see if a variable was === to a empty string "" would account for if the user didn't input anything in the new Ball (arguement) or in better words accounting for undefined inputs. I figured
//out I needed to set the users balltype input strictly equal to "undefined" itself and it worked! Great challenge!

