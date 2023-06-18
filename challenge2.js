let Speed = prompt("Enter Speed")

let Speedlimit = 70

if (Speed <= 70){
    alert("Ok");
}
if (Speed <= Speedlimit + 5){
    alert("points: + 2")
}else if (Speed <= Speedlimit + 10){
    alert("points:4")
}else if (Speed <= Speedlimit + 15){
    alert("points:6")
}else if (Speed <= Speedlimit + 20){
     alert("points:8")           
}else if (Speed <= Speedlimit + 25){
    alert("points:10")
}else if (Speed <= Speedlimit + 30){
    alert("points:12")
}else if (Speed > 100){
    alert("License suspended")
}       