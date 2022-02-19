function isOdd(num) {
    return !((num % 2) == 0);
}

function isEven(num) {
    return (num % 2) == 0;
}

function getNumber() {
    let num = parseInt(prompt("Introdueix un nombre: "));
    if (isNaN(num)) { return 'exit'}
    else { return num;}
}

function presentation() {
    alert("ODD OR EVEN CALCULATOR");
    alert("Add something different from a number to exit");
}

function processor() {
    let sentinel = 'exit';

    while (true) {
        let number = getNumber();
        
        if (number != sentinel) {

            if (isOdd(number)) { 
                alert('El nombre és imparell');}
            else { 
                alert('El nombre és parell');
            }
        }
        else {
            break;
        }
    }
    alert('Have a nice day!');
}

presentation();
processor();