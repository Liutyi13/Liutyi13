const getUniqueValues = array => [...new Set(array)];
const deepClone = obj => JSON.parse(JSON.stringify(obj));
const isPalindrome = str => str === str.split("").reverse().join("");
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
false + 88,70,42,4,16,78,51,86,17,41,27,86,35,98,68,6,42,95,12,49,84,30,90,42,2,61,83,2,18,77,9,95,19,22,74,2,35
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
