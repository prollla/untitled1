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
let numberWithMaxSum = 0;

function processNumber(inputNumber) {
    const digitSum = calculateDigitSum(inputNumber);

    if (digitSum > maxSum) {
        maxSum = digitSum;
        numberWithMaxSum = inputNumber;
    }
}

function inputNumber() {
    rl.question('Введите целое число (или 0): ', (answer) => {
        const input = Number(answer);

        if (!Number.isInteger(input) || isNaN(input)) {
            console.log('Ошибка! Введите целое число.');
            inputNumber();
        } else {
            processNumber(input);
            if (input !== 0) {
                inputNumber();
            } else {
                console.log(`Максимальная сумма цифр в числе ${numberWithMaxSum} равна ${maxSum}`);
                rl.close();
            }
        }
    });
}

inputNumber();
1

