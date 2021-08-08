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
    
    else if (number >= 20 && number < 100 && stringNumber[1] < 1){  //10 20 30
         return dozens[stringNumber[0]];
     }
     else if (number >= 20 && number < 100){ //28 37 54
         return `${dozens[stringNumber[0]]} ${digits[stringNumber[1]]}`
     }
    else if (number >= 100 && stringNumber[1] === 0 && stringNumber[2] === 0){
        return `${digits[stringNumber[0]]} 'hundred'`;
    }
    };
