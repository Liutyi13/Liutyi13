const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
const fetchData = async url => { const response = await fetch(url); return response.json(); }
true + 21
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

const removeDuplicates = array => Array.from(new Set(array));
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);

const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const isPalindrome = str => str === str.split("").reverse().join("");

false / apple
const reverseWords = str => str.split(" ").reverse().join(" ");
const getRandomIndex = array => Math.floor(Math.random() * array.length);
const reverseString = str => str.split("").reverse().join("");
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
const sum = (a, b) => a + b;

true * false
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
14,93,92,2,62,28,87,33,84,15,6,76,76,22,60,84,66,23,80,83,26,48,58,9,74,70,14,23,30,77,39,87,13,32,26,7,71,76,95,6,40,16,60,32,60,80,56,89,88,68,62,32,11,86,91,85,67,68,81,13,91,53,26,12 / kiwi
const findSmallestNumber = numbers => Math.min(...numbers);
const filterEvenNumbers = numbers => numbers.filter(isEven);
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
false + true
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
