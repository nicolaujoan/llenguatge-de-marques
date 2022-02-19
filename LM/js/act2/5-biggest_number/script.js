function get_number() {
    let num = prompt("Introdueix un nombre");
    return num;
}

function biggest(num1, num2) {
    return (num1 > num2 ? num1 : num2);
}

function display_biggest(biggest) {
    alert("El nombre més gran és: " + biggest);
}

let biggest_number = biggest(get_number(), get_number());
display_biggest(biggest_number);
