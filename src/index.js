module.exports = function toReadable (number) {
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
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        };
       
        const dozens = { 
           
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
    
    
    if (number < 20) {
        return digits[number];
     }
    //10 20 30
    else if (number >= 20 && number < 100 && stringNumber[1] < 1){  
         return dozens[stringNumber[0]];
     }
    //28 37 54
     else if (number >= 20 && number < 100){ 
         return `${dozens[stringNumber[0]]} ${digits[stringNumber[1]]}`
     }
    //100 400 700
    else if (number >= 100 && stringNumber[1] < 1 && stringNumber[2] < 1){
        return `${digits[stringNumber[0]]} hundred`;
    }
   else if (number % 100 < 20){
       return `${digits[stringNumber[0]]} hundred ${dozens[number % 100]}`;
       }
   else if (number % 10 === 0){
       return `${digits[stringNumber[0]]} hundred ${dozens[stringNumber[1]]}`;
       }
    else { return `${digits[stringNumber[0]]} hundred ${dozens[stringNumber[1]]} ${digits[stringNumber[2]]}`;
       }
    };
