function sprawdz()
{

var number = document.getElementById("field").value;
console.log(number);

if (number>0) {
    document.getElementById("wynik").innerHTML="dodatnia";
} else if (number<0) {
    document.getElementById("wynik").innerHTML="ujemna";
} else if (number==0) {
    document.getElementById("wynik").innerHTML="zero";
} else {
    document.getElementById("wynik").innerHTML="NaN";
}

}
