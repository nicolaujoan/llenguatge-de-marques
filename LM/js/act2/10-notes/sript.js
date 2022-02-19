function display_presentation() {
    alert('Aquest programa fa una valoració de la nota que has tret.');
}

function get_mark() {
    let mark = parseInt(prompt('Introdueix la teva nota: '));
    return mark;
}

function process_mark(mark) {
    let message = 'la nota ';

    switch (mark) {
        case 0: case 1: case 2: case 3: case 4: {
            message += mark + ' és molt insuficient';
            break;
        }

        case 5: case 6: {
            message += mark + ' és un poc justa';
            break;
        }

        case 7: {
            message += mark + ' és un notable baix';
            break;
        }
        
        case 8: {
            message += mark + ' és un notable alt';
            break;
        }

        case 9: case 10: {
            message += mark + ' és un excelent';
            break;
        }

        default: message += 'no és vàlida';
    }

    alert(message);
}

display_presentation();
let nota = get_mark();
process_mark(nota);
