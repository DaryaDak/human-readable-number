module.exports = function toReadable(number) {
    if (number === 0) {
        return 'zero';
    }

    let digits = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
   
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
