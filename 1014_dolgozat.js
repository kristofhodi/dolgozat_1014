function threeRuls() {
    let result = '';
    let count = 0;
    let skip = 1;

    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0) {
            count++;
            if (count === skip) {
                skip++;
                continue;
            }
        }
        result += i + (i < 100 ? ', ' : '');
    }
    return result;
}
console.log(threeRuls())


function isLeapYear(year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isLeapYear(2020))


function digitsAverage(number) {
    let sum = 0;
    let count = 0;
    let average = 0;
    for (let i = 0; i < number; i++) {
        sum += number[i]; 
        count++; 
    }

    average = sum / count;
    return average;
}
console.log(digitsAverage(10))


function factorial(number) {
    let factorialFornumber = 1;
    for (let i = 1; i <= number; i++) {
        factorialFornumber *= i;
    }
    return factorialFornumber;
}
console.log(factorial(5))