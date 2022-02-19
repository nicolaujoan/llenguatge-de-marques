function get_user_data() {
    
    let user_data = {
        'nom': '',
        'edat':'',
        'estatura': '',
        'estat civil': ''
    }

    // fill user data
    for (let key in user_data) {
        user_data[key] = prompt(key + ': ');
    }

    return user_data;
}

let missatge = '';
let dades = get_user_data();

if (dades['estat civil'] == 'casat') {
    for (const key in dades) {
        missatge += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + key + ': ' + dades[key];
    }
    document.write('<p>' + missatge + '</p>');
}

if (dades['estat civil'] == 'solter') {
    for (const key in dades) {
        document.write('<p>' + key + ': ' + dades[key] + '</p>');
    }
}



