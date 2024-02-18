const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateDigitSum(number) {
    number = Math.abs(number);
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
}

let maxSum = 0;
let numbersWithMaxSum = [];

function processNumber(inputNumber) {
    const digitSum = calculateDigitSum(inputNumber);

    if (digitSum > maxSum) {
        maxSum = digitSum;
        numbersWithMaxSum = [inputNumber];
    } else if (digitSum === maxSum) {
        numbersWithMaxSum.push(inputNumber);
    }
}

function isOctal(input) {
    return /^0[0-9]+$/.test(input);
}

function inputNumber() {
    rl.question('Введите целое число (или 0): ', (answer) => {
        const input = Number(answer.trim());

        if (!Number.isInteger(input) || isNaN(input) || isOctal(answer)) {
            console.log('Ошибка! Введите целое число.');
            inputNumber();
        } else {
            processNumber(input);
            if (input !== 0) {
                inputNumber();
            } else {
                if (numbersWithMaxSum.length > 0) {
                    console.log(`Максимальная сумма цифр в числах ${numbersWithMaxSum.join(', ')} равна ${maxSum}`);
                }
                rl.close();
            }
        }
    });
}

inputNumber();



