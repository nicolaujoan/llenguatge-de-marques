function get_name(gender) {
    let name = prompt("Introdueix un nom de " + gender);
    return name;
}

function display_names(male_name, female_name) {
    alert("El nom de home és: " + male_name + "\nEl nom de dona és: " + female_name);
}

let male_name = get_name("home");
let female_name = get_name("dona");
display_names(male_name, female_name);

