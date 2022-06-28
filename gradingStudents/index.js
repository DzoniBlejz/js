let grades = [40, 52, 54, 84, 79];

function gradingStudents(grades) {
    let smth = grades.map((grade) => {
        let diff = 5 - (grade % 5);
        if (diff < 3 && grade >= 38) {
            grade+= diff;
        } 
        return grade;
    }
    )
    return smth;
}