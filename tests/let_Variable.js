/**  Topics
1. Functional Scope of variable using 'var' and 'let' datatype
2. Block Scope of variable using 'var' and 'let' datatype
*/

console.log(" ################ EXAMPLE 1 ################")
let username 

function UserDetails(username) {
    if (username == "Swathi") {
        console.log("UserName is " + username)
    }
    else {
        console.log("UserName is Different. Please Check")
    }
}

console.log(username) //undefined
UserDetails("Swathi") // UserName is Swathi

console.log(" ################ EXAMPLE 2 ################")
let StaffName = "Swathi"

function StaffDetails(Stfname) {
    if (Stfname == 'Swathi') {
        console.log("UserName is " + Stfname)
    } else {
        console.log("UserName is Different")
    }
}

StaffDetails(StaffName)
console.log(" ################ EXAMPLE 3 ################")

function employeeDetails(emplyName) {
    let SeniorManagerFN = "Saras"  // Functional scope of a variable using 'let' 
    if (emplyName == "Swathi") {
        console.log("UserName is " + emplyName)
    } else {
        console.log("UserName is Different")
    }
    console.log(SeniorManagerFN)
}

employeeDetails("Swathi")  
console.log(" ################ EXAMPLE 4 ################")

function employeeDetails(emplyName) {
    var SeniorManagerLN = "Saras"  // Functional scope of a variable using 'var' 
    if (emplyName == "Swathi") {
        console.log("UserName is " + emplyName)
    } else {
        console.log("UserName is Different")
    }
    console.log(SeniorManagerLN)
}

employeeDetails("Swathi")  
console.log(" ################ EXAMPLE 5 ################")

function employeeDetails(emplyName) {
    var SeniorManagerFN1 = "Saras"  // Functional scope of a variable using 'let'[outside of paranthesis] 
    if (emplyName == "Swathi") {
        console.log("UserName is " + emplyName)
    } else {
        console.log("UserName is Different")
    }
}
//console.log(SeniorManagerFN1)
employeeDetails("Swathi") 
console.log(" ################ EXAMPLE 6 ################")

function employeeDetails(emplyName) {
    var SeniorManagerLN1 = "Saras"  // Functional scope of a variable using 'var'[outside of paranthesis] 
    if (emplyName == "Swathi") {
        console.log("UserName is " + emplyName)
    } else {
        console.log("UserName is Different")
    }
}
//console.log(SeniorManagerLN1)
employeeDetails("Swathi")
console.log(" ################ EXAMPLE 7 ################")

function employeeDetails(emplyName) {
    if (emplyName == "Swathi") {
        var SDETFN = "Saras"     //Block scope of variable using 'var'
        console.log("UserName is " + emplyName)
    } else {
        console.log("UserName is Different")
    }
    console.log(SDETFN) 
}
employeeDetails("Swathi")  

console.log(" ################ EXAMPLE 8 ################")

function employeeDetails(emplyName) {
    if (emplyName == "Swathi") {
        let SDETLN = "Saras"     //Block scope of variable using 'let'[not allowed to access variable outside of block]
        console.log("UserName is " + emplyName)
    } else {
        console.log("UserName is Different")
    }
    console.log(SDETLN) 
}
employeeDetails("Swathi")  

