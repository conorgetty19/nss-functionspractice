//function to create and return student object
const createStudent = () => {
    const studentObj = {
        name: "Alex",
        grade: 9
    }

    return studentObj
}
//function to add math grade property to student object with value of B and return obj
const addMathGrade = (object) => {
    object.math = "B"

    return object
}

//fun to add history prop to student obj w/value of C and return obj
const addHistoryGrade = (object) => {
    object.history = "C"

    return object
}

//fun to add science prop to studet obj w/value of A and return obj
const addScienceGrade = (object) => {
    object.science = "A"

    return object
}

//invoke functions and store value in variable
let studentTest = addScienceGrade(addHistoryGrade(addMathGrade(createStudent())))

//console log to display results
console.log(studentTest)