module.exports = function toReadable(number) {
    if (number === 0) {
        return 'zero';
    }

    let digits = "one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
    let tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");
   
const stringNumber = number.toString();
const dec = tens[stringNumber[0]];
const hundreds = digits[stringNumber[0]];
const units = digits[stringNumber[1]]; 

if (number > 0 && number < 20) {
    return digits[number];
 }

 else if (number >= 20 && number < 100){
     return `${dec} ${units}`;
 }
 else if (stringNumber.length === 3){
    return `${hundreds} ${dec} ${units}`;
 }
};
