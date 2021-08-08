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
    9: "nine"};

    const tens = {
    1: "eleven",
    2: "twelve",
    3: "thirteen",
    4: "fourteen",
    5: "fifteen",
    6: "sixteen",
    7: "seventeen",
    8: "eighteen",
    9: "nineteen"
    };
   
    const dozens = { 
        1: "ten",
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };

   
   
const stringNumber = number.toString();


if (stringNumber.length === 1) {
    return digits[number];
 }

 if (stringNumber.length === '00' && stringNumber[1] < 1){  //10 20 30
     return dozens[stringNumber[0]];
 }
else if (stringNumber.length === '00' && stringNumber[1] == 1){ //11 14 16
         return tens[stringNumber[0]];
     }
    
};
