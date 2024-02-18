/**  Topics
1. If & else program
2. Switchcase Progam
*/

let browerName = 'Chrome'
let testType = 'smoke'

function launchbrowser(browerName)
{
    if (browerName == 'Chrome') {
        console.log("Hey we are using " + browerName+ " Browser")
    }
    else {
        console.log("We are not using Chrome Browser")
    }
}


function runTests(testType)
{
    switch (testType) {
        case "smoke":
            console.log("Smoke Testing")
            break;
        case "sanity":
            console.log("Sanity Testing")
            break;
        case "regression":
            console.log("Regression Testing")
            break;
        default:
            console.log("Please Use Valid Browser")
    }
    
}

launchbrowser(browerName)
runTests(testType)