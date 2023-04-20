//function to add two numbers
const additionFunction = (num1, num2) => {
 const result = num1 + num2

 return result
}

//function to multiply a number by two
const doubleIt = (num) => {
    const result = num * 2

    return result
}

//invoke addition function and store in a variable
let additionTest = additionFunction(4, 14)

//invoke multiplication function and store in a variable
//enter the result of the addition function as an argument
let doubleTest = doubleIt(additionTest)

//log the final resutl
console.log(doubleTest)