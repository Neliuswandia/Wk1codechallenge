//prpmpt the input for basic salary and benefits
let basicSalary = parseFloat(prompt("Enter your monthly salary"))
let benefits = parseFloat(prompt("Enter your mothly tax"))

// gross salary calculation
let grossSalary = basicSalary + benefits;

//This funtion is for calculating payee
function calculatingpayee(grossSalary){
    if (grossSalary <= 24000){
        return grossSalary * 0.01;
    } else if (grossSalary >= 24001 && grossSalary <= 32333){
        return grossSalary * 0.25
    } else {
        return grossSalary * 0.3;
    }
}

let payee = calculatingpayee(grossSalary);
console.log("monthly payee : " + payee.toFixed(2) + "")

//This function is for calculating nhif deduction
function nhifDeduction(grossSalary) {
    if (grossSalary <= 5999) {
        return 150;
    }else if (grossSalary >= 6000 && grossSalary <= 7999){
        return 300;
    }else if (grossSalary >= 8000 && grossSalary <= 11999){
        return 400
    }else if (grossSalary >= 12000 && grossSalary <= 14999){
        return 500
    }else if (grossSalary >= 15000 && grossSalary <= 19999){
        return 400
    }else if (grossSalary >= 20000 && grossSalary <= 24999){
        return 400
    }else if (grossSalary >= 25000 && grossSalary <= 29999){
        return 850
    }else if (grossSalary >= 30000 && grossSalary <= 34999){
        return 900 
    }else if (grossSalary >= 35000 && grossSalary <= 39999){
        return 950 
    }else if (grossSalary >= 40000 && grossSalary <= 44999){
        return 1000 
    }else if (grossSalary >= 45000 && grossSalary <= 49999){
        return 1100
    }else if (grossSalary >= 50000 && grossSalary <= 59999){
      return 1200
    }else if (grossSalary >= 60000 && grossSalary <= 59999){
        return 1300
    }else if (grossSalary >= 70000 && grossSalary <= 79999){
        return 1400 
    }else if (grossSalary >= 80000 && grossSalary <= 89999){
        return 1500 
    }else if (grossSalary >= 90000 && grossSalary <= 99999){
        return 1600
    }else if (grossSalary >= 100000){
        return 1700 
    }                                              
}
