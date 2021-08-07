module.exports = function toReadable(number) {
    if (number === 0) {
        return 'zero';
    }

    const array = {
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
    }
    const tens = {
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

if (number > 0 && number <= 19) {
    return array[number];
 }

if (number >=20 && number < 100) {
    return tens[number.toString()[0]];
 }
else {
    return tens[number.toString()[0]] + ' ' + array[number.toString()[1]];
 }

if (number > 99 && number < 1000) {
 if (number % 10 === 0 && number % 100 === 0) {
return array[stringNumber[0]] + ' hundred';
 }
 if (number % 100 < 20) {
     return array[stringNumber[0]] + ' hundred' + array[number % 100];
 }
}
 else {
 return array[stringNumber[0]] + ' hundred' + tens[stringNumber[1]] + ' ' + array[stringNumber[2]];
}
}
