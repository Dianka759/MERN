/////////////////////////// Prime Finder ///////////////////////////////////
Number.prototype.isPrime = function() {    
    for( let i=2; i<this;) {
        if( this % i === 0 ) {
            return false;
        }
        if (i==2) {
            i++;
        } else {
            i += 2;
        }
    }
    return true;
}

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while (primeCount < 1e4)  {    
    if (num.isPrime()) {
        primeCount++;
    }    
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

// calculating the 100,000th and the 1,000,000th prime numbers
let start2 = performance.now()
while( primeCount < 1e6 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 100,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start2} milliseconds to run`);

let start3 = performance.now()
while( primeCount < 1e7 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start3} milliseconds to run`);



////////////////////////////fibonacci//////////////////////////////////////////
const { performance } = require('perf_hooks');

// recursive
const start = performance.now();
function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
}
rFib(29);

console.log(`Fib recursion took ${performance.now() - start} milliseconds to run for 20.`);


// iterative
const start2 = performance.now();
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}
iFib(20);

console.log(`Fib iteration took ${performance.now() - start2} milliseconds to run for 20.`);

/////////////////////////Reverse string ////////////////////////////
const { performance } = require('perf_hooks');
const start = performance.now();
const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join("");
console.log(reversed1);
console.log(`reversed1 took ${performance.now() - start} milliseconds to run`);

console.log("--------------------------------------");

const start2 = performance.now();
function reversed2(str) {
  let reversedString = "";
  for (i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}
console.log(reversed2(story))
console.log(`reversed2 took ${performance.now() - start2} milliseconds to run`);