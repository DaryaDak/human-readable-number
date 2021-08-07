module.exports = function toReadable(number) {
    if (number === 0) {
        return 'zero';
    }

    const words = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    }
   
let stringNumber = number.toString();
let hundreds = '';

if (number > 0 && number < 20) {
    return words[number];
 }

if (stringNumber.length === 3) {
    hundreds = words[stringNumber[0]] + ' hundred';
    stringNumber = stringNumber.slice(1);
}
if (stringNumber.length === '00') {
    return hundreds.trim();
}

if (words[stringNumber]) {
    return hundreds + words[stringNumber].trim();
}
else {
    const tens = words[stringNumber[0]] ? `${words[stringNumber[0] * 10]}` : '';

    const digits = words[stringNumber[1]];
    return `${hundreds}${tens}${digits}`.trim();
}
};
