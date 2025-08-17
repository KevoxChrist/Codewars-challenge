//Instructions
// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy,
// different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.

//
// number of hotdogs	      price per unit (cents)
// n < 5	                   100
// n >= 5 and n < 10	       95
// n >= 10	                 90


function saleHotdogs(n){
  
  if (n<5){
    return n * 100
  }
  else if (n >= 5 && n < 10){
    return n * 95
  }
  else{
    return n * 90
  }
  
  
}

//MY THOUGHTS
// I found this through the JavaScript training playlist. I felt good going into this problem as well. I knew how I wanted to set up the if conditional statements and I'm glad I typed it out without using
// the ternary operator because it could have gotten messy really fast!
