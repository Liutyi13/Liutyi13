const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
true - kiwi

const findSmallestNumber = numbers => Math.min(...numbers);

grape


console.log(getRandomString());
