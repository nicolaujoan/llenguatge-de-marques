function get_name() {
    let name = prompt("Introdueix el teu nom");
    return name;
}

function write_name(name) {
    document.write("<p> El teu nom és: " + name);
}

let nom = get_name();
write_name(nom);