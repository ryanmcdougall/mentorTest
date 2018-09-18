//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {
  reverseIt: (str) => {
    let split = str.split("")
      console.log('we have split the incoming string into single letters in an array ::::', split)
    let reversed = split.reverse()
      console.log('now we apply the reverse method to the array of single letters to have a result of ::::', reversed)
    let joined = reversed.join('')
      console.log('lastly, we use the join method to take our reversed array of single letters to return our original string reversed ::::', joined)
    
    return joined
   },

  //uncomment and finish the reverseIt function. It will take in one parameter which is a String and
  //reverse it

  removeDups: (arr) => {
    for(let i = 0; i < arr.length; i++){
      for(let j = i + 1; j < arr.length; j++){
        console.log('starting with a nested for loop allows me to have access to every value in the passed array')
        if(arr[i] === arr[j]){
          console.log('if this conditional results in "true", then we can splice out exactly where that duplicate value is located, always being the higher index being removed')
          arr.splice(j, 1);
        }
      }
    }
    return arr
  },

  //uncomment and finish the removeDups function. It will take in one parameter which is an Array
  //remove all duplicates

  titleIt: (str) => {
    let lower = str.toLowerCase()
      console.log("lets start by making sure all the letters are lower case ::::", lower)
    let split = lower.split(' ')
      console.log('now we have the string separated into an array, having each individual word being a value in the array ::::', split)
    let mapped = split.map( (word) => word[0].toUpperCase() + word.substring(1))
      console.log('a simple map that has each element take the first letter and capatilize it, then add the rest of the string should do the trick ::::', mapped)
    let joined = mapped.join(' ')
      console.log('to finish, i will take this new mapped arr and join all the elements together as one string again')

    return joined
    
  },

  //uncomment and finish the titleIt function. It will take in one parameter which is a String and
  //capitalize the first letter of each word

  vowelCounter: (str) => {
    let vowelsCount = str.match(/[aeiou]/gi)
      console.log('im going to use Regex to keep an array of all instances of the corresponding vowels i have placed as the parameter of the match method')
      console.log('if there happens to be no vowels we get "null", so i set up a ternary to return false or the length of the array of counted vowels')
      return vowelsCount === null ? 0 : vowelsCount.length
  },

  //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string

  isPrime: (num) => {
      console.log("i need to start with testing if the passed number is two, this is because it gives an incorrect result due to the layout of my function/for loop")
    if (num === 2) {
      return true;
    } 
    else if(num > 1){
      console.log("now i need to establish if the passed number is greater than one and or positive, meaning it is a testable number ")
        for (var i = 2;  i < num; i++) {
          if (num % i !== 0 ) {
            return true;
          } 
            else if (num === i * i) {
              return false
            } 
              else {
                return false;
              }
            }
          }
        else {
          return false;
        }
  },

  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not

  //what is the value of foo?
  //var foo = 10 + '20';
  //uncomment the foo property and give your answer as its value

  foo: '1020',

  //what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

  log1: "Hello World",
  log2: undefined
}
