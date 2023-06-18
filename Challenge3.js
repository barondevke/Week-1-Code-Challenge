let basicSalary = prompt('Enter basic salary')

function calculateNHIFDeduction(basicSalary) {
    if (basicSalary < 6000) {
        console.log('NHIF Deductions : 150')

    }
    else if (basicSalary > 5999 && basicSalary < 8000) {
        console.log('NHIF Deductions : 300')

    }
    else if (basicSalary > 7999 && basicSalary < 12000) {
        console.log('NHIF Deductions : 400')

    }
    else if (basicSalary > 11999 && basicSalary < 15000) {
        console.log('NHIF Deductions : 500')

    }
    else if (basicSalary > 14999 && basicSalary < 20000) {
        console.log('NHIF Deductions : 600')

    }
    else if (basicSalary > 19999 && basicSalary < 25000) {
        console.log('NHIF Deductions : 750')

    }
    else if (basicSalary > 24999 && basicSalary < 30000) {
        console.log('NHIF Deductions : 850')

    }
    else if (basicSalary > 29999 && basicSalary < 35000) {
        console.log('NHIF Deductions : 900')

    }
    else if (basicSalary > 34999 && basicSalary < 40000) {
        console.log('NHIF Deductions : 950')

    }
    else if (basicSalary > 39999 && basicSalary < 45000) {
        console.log('NHIF Deductions : 1,000')

    }
    else if (basicSalary > 44999 && basicSalary < 50000) {
        console.log('NHIF Deductions : 1,100')

    }
    else if (basicSalary > 49999 && basicSalary < 60000) {
        console.log('NHIF Deductions : 1,200')

    }
    else if (basicSalary > 59999 && basicSalary < 70000) {
        console.log('NHIF Deductions : 1,300')

    }
    else if (basicSalary > 69999 && basicSalary < 80000) {
        console.log('NHIF Deductions : 1,400')

    }
    else if (basicSalary > 79999 && basicSalary < 90000) {
        console.log('NHIF Deductions : 1,500')

    }
    else if (basicSalary > 89999 && basicSalary < 100000) {
        console.log('NHIF Deductions : 1,600')

    }
    else if (basicSalary > 99999) {
        console.log(`NHIF Deductions : 1,700`)
    }



}

function calculatePAYE(basicSalary) {
    if (basicSalary < 24001) {
        let tax = 0.1 * basicSalary
        return tax
    }
    else if (basicSalary > 24000 && basicSalary < 32334) {
        let tax = 0.25 * basicSalary
        return tax

    }
    else if (basicSalary > 32333) {
        let tax = 0.3 * basicSalary
        return tax
    }
}

