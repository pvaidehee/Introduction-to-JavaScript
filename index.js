/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

var votingAge = "true";
true > 18;
console.log(votingAge);

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

var nameSchool = 'Lambda School';
nameSchool = 'Full Stalk Web';
console.log(nameSchool);

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

var a ="15.87"; //This is a string.
var resultInt = Math.floor(a); //This outputs integer.
console.log(resultInt)

//Task d: Write a function to multiply a*b 

function multiply(a,b){
    return a * b;
}
console.log(multiply(2,7));

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

//variables
let dogYears = 7;
function multiply(a,dogYears){
    return a * dogYears;
}
console.log(multiply(5,7));


/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  

if ( dogPound = 0);( dogPound <= 5 && dogAge >= 1);{
    console.log("5%  of their body weight");
}
else if ( dogPound >= 6);( dogPound <=10 && dogAge >=1);{
    console.log("4% of their body weight");
}
else if ( dogPound >= 11);( dogPound <= 15 && dogAge>=1);{
    console.log("3% of their body weight");
}
else if(dogPound > 15 && dogAge>=1){
    console.log("2%of their body weight");
}
else if(dogAge < 1 && dogMonths >= 2);( dogMonths <= 4);{
    console.log("10% of their body weight");
}
else if(dogAge < 1 && dogMonths >= 4);( dogMonths <= 7);{
    console.log("5% of their body weight");
}
else if(dogAge < 1 && dogMonths >= 7);( dogMonths <= 12);{
    console.log("4% of their body weight");
}

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
function game(hand){
    if(Math.cell(Math.random() * 3) === 1 && hand === "scissors"){
      return "Yoy Tied!";
    }
    else if(Math.cell(Math.random() * 3) === 1 && hand === "rock"){
      return "Yoy Won!";
    }
     else if(Math.cell(Math.random() * 3) === 1 && hand === "paper"){
      return "Yoy Lost!";
    }
     else if(Math.cell(Math.random() * 3) ===  2 && hand === "scissors"){
      return "Yoy Lost!";
    }
     else if(Math.cell(Math.random() * 3) === 2 && hand === "rock"){
      return "Yoy Tied!";
    }
     else if(Math.cell(Math.random() * 3) === 2 && hand === "paper"){
      return "Yoy Won!";
    }
     else if(Math.cell(Math.random() * 3) === 3 && hand === "rock"){
      return "Yoy Lost!";
    }
     else if(Math.cell(Math.random() * 3) === 3 && hand === "paper"){
      return "Yoy Tied!";
    }
     else if(Math.cell(Math.random() * 3) === 3 && hand === "scissors"){
      return "Yoy Won!";
    }
  }
  
  for(i=0; i<20; i++){
    console.log(game(rock));
  }


/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
let kilotoMile = 0.62137119;
function multiply(a,kilotoMile){
    return a * kilotoMile;
}
console.log(multiply(2,kilotoMile));



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
let feettoCm = 30.48;
function multiply(a,feettoCm){
    return a * feettoCm;
}
console.log(multiply(2,feettoCm));



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong(){
      for(let i = 0; i <= 99; i--){
          let annoyingSong = """ + "bottle of soda on the wall" + "" "bottles of soda" + "take one down pass it around" + "" "
          console.log(annoyingSong)
      }
  }


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
var a = ("");
if(a>=90){
console.log("A");
}
else if (a<90 && a>=80){
    console.log("B");
}
    else if(a<80 && a>=70){
        console.log("C");
    }
    else if(a<70 && a>=60){
        console.log("D");
    }
    else{
        console.log("F");
    }

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method
const vowels =["a", "e", "I", "o", "U"];
console.log(vowels.length);




/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





