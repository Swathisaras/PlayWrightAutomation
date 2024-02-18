function checkNumberType(number) {
    if (number < 0) {
        console.log(number + " is lesser than Zero")
    }
    else if (number > 0) {
        console.log(number + " is greater than zero")
    }
    else {
        console.log(number +" is equal to zero")
    }
}

let numValue = 0
checkNumberType(numValue)