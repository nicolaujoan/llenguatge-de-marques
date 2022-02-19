alert("Aquest programa mostra la suma de dos nombres");

let num1 = parseInt(prompt("Introdueix el primer nombre: "));
let num2 = parseInt(prompt("Introdueix el segon nombre: "));

if (typeof(num1) == 'number' && typeof(num2) == 'number') {
    alert("La suma dels dos nombres val " + (num1 + num2));
} else {
        alert("Has d'introduir nombres!");
    }