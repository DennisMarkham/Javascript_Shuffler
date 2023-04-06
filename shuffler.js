const numbers = [1, 2, 2, 3, 3, 3]

const shuffled = []

function shuffler(fedNumbers){
randomPick = Math.floor(Math.random() * fedNumbers.length);
 shuffled.push(fedNumbers[randomPick]);
 fedNumbers.splice(1, randomPick);
  if (fedNumbers.length > 1)
    {
      //>0 causes an infinite loop, but > 1 only puts four 
      //numbers into the shuffled array.  Why?
      shuffler(fedNumbers)
    }
}

shuffler(numbers);

console.log(shuffled);
