const readline = require('readline');


// class Clock {
//   constructor() {
//       let date = new Date();
//       this.hours = date.getHours();
//       this.minutes = date.getMinutes();
//       this.seconds = date.getSeconds();
//       this.printTime();
//       setInterval(this._tick.bind(this), 1000);
//   }

//   // Format the time in HH:MM:SS
//   // Use console.log to print it.
//   printTime() {
//     console.log(`${Clock.two_digits(this.hours)}:${Clock.two_digits(this.minutes)}:${Clock.two_digits(this.seconds)}`);
//   }

//   // 1. Increment the time by one second.
//   // 2. Call printTime.
//   _tick() {
//     this.incrSeconds();

//     this.printTime();
//   }

//   incrSeconds() {
//     if (++this.seconds === 60) {
//       this.seconds = 0;
//         this.incrMinutes();
//     }
//   }

//   incrMinutes() {
//     if (++this.minutes === 60) {
//       this.minutes = 0;
//       this.incrHours();
//     }
//   }

//   incrHours() {
//     if(++this.hours > 24) {
//         this.hours === 0
//     }
//   }

//   static two_digits = function(num){
//     return num.toString().padStart(2,'0');
//   }
// }

// const clock = new Clock();

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// function addNumbers(sum, numsLeft, completionCallback) {
//   if (numsLeft > 0) {
//     rl.on('line', (line) => {
//       let num = parseInt(line)
//       sum += num;
//       console.log(sum);
//       addNumbers(sum, --numsLeft, completionCallback);
//     })
//   } else {
//     completionCallback(sum);
//     rl.close();
//   }
// }


// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
// Binds context onto a function
// Function.prototype.myBind = function(context) {
//     let that = this;
//     return function(){ // this becomes the function and not the outer one
//         return that.apply(context);
//     }
// }

// class Lamp {
//   constructor() {
//     this.name = "a lamp";
//   }
// }

// const turnOn = function() {
//   console.log("Turning on " + this.name);
// };

// const lamp = new Lamp();
// const boundTurnOn = turnOn.bind(lamp);
// const myBoundTurnOn = turnOn.myBind(lamp);

// turnOn(); // should not work the way we want it to
// boundTurnOn(); // should say "Turning on a lamp"
// myBoundTurnOn(); // should say "Turning on a lamp"





const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// Write this first.
function askIfGreaterThan(el1, el2, callback){
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.
  console.log(`Is ${el1} greater than ${el2}? t or f`);
  reader.on('line', (line) => {
    if (line[0] === 't' || line[0] === 'T') {
      return callback(true);
      reader.close();
    } else if (line[0] === 'f' || line[0] === 'F') {
      return callback(false);
      reader.close();
    }

  })

}

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":

  const checker = async _ =>{
    // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
    //    know whether any swap was made.
    if (i < arr.length - 1) {
      askIfGreaterThan(arr[i], arr[i+1],function(isGreaterThan){
        if (isGreaterThan) {
          [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
          madeAnySwaps = true;
        }

        // reader.close();
        innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
      })
    // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
    //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
    //    continue the inner loop. You'll want to increment i for the
    //    next call, and possibly switch madeAnySwaps if you did swap.
    } else {
      outerBubbleSortLoop(madeAnySwaps);
    }

    innerBubbleSortLoop(arr, i+1);
  }
}

function outerBubbleSortLoop(madeAnySwaps) {
  console.log(`In ouoter bubble sort`);
}

let arr = [5,3,4,2,8,12,10,1];
innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.
function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
  }

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

askIfGreaterThan(3,4,(num)=>{console.log(num);})

// absurdBubbleSort([3, 2, 1], function(arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });




















