let studentMarks = prompt("Enter your marks");

if (studentMarks > 100 || studentMarks < 0){
    alert ("invalid!")
}else if (studentMarks <= 100 && studentMarks > 79){
    alert ("you got an A");
}else if (studentMarks <= 79 && studentMarks > 60){
    alert ("you got a B");
}else if (studentMarks <= 59 && studentMarks > 49){
    alert ("you got a C");
}else if (studentMarks <= 49 && studentMarks > 40){
    alert ("you got a D");
}else if(studentMarks <= 40 && studentMarks >= 0){
    alert ("you got a D");
}        