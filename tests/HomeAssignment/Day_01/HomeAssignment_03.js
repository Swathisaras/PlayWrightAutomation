let StudScoreValue = 77
let Score = ""

function calculateGrade(Studentscore) {
    switch (true) {
        case (Studentscore <= 100 && Studentscore >= 90):
            Score = 'A'
            break;
        case (Studentscore <= 90 && Studentscore >= 80):
            Score = 'B'
            break;
        case (Studentscore <= 80 && Studentscore >= 70):
            Score = 'C'
            break;
        default:
            return "They are getting the value below 70"   
    }
    return Score
}

let value = calculateGrade(StudScoreValue)
console.log(value)