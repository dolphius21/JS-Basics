// Logical AND (&&)
// Returns TRUE if both operands are TRUE
console.log(true && true);
console.log(true && false);

// Logical OR (||)
// Returns TRUE if one of the operands is TRUE
console.log(true || true);
console.log(true || false);

let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome && goodCreditScore;

console.log('Eligible', eligibleForLoan);

// NOT (!)
let applicationRefused = !eligibleForLoan;

console.log('Application Refused', applicationRefused);


// Falsy (false)
// undefined
// null
// 0
// false
// ''
// NaN

// Anything that is not Falsy -> Truthy

let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);
