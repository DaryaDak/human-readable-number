module.exports = function toReadable(number) {
    if (number === 0) {
        return 'zero';
    }

    const digits = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15:  "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen"
    };

    const tens = {
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy"
    80: "eighty"
    90: "ninety"
    };
   
const stringNumber = number.toString();
const dec = tens[stringNumber[0]];
const units = digits[stringNumber[1]];


if (number < 20) {
    return digits[number];
 }

else if (number >= 20 && number < 100 && stringNumber[1] === 0){
     return tens[stringNumber[0]];
 }

 else if (number >= 20 && number < 100){
     return dec +' '+units;
 }
if (stringNumber.length === 3 && stringNumber[1] === 0 && stringNumber[2] === 0){
return (digits[stringNumber[0]] + ' hundred');
}
  else if (stringNumber.length === 3 && stringNumber[1] >= 1 && stringNumber[2] === 0){
      return (digits[stringNumber[0]] + ' hundred'+ tens[stringNumber[0]] +' dozen');
  }
  else if (stringNumber.length === 3 && stringNumber[1] >= 1 && stringNumber[2] >= 1){
      return (digits[stringNumber[0]] + ' hundred' + tens[stringNumber[1]] +' dozen' + digits[stringNumber[2]]);
 }
};
