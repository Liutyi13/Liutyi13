const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

71 - grape
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
let array = getRandomArray(); array.forEach(item => console.log(item));
grape

const greet = name => `Hello, ${name}!`;
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
function addNumbers(a, b) { return a + b; }
