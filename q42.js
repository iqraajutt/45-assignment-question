"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great(magicians) {
    return magicians.map(name => `The great ${name}`);
}
let magicians_names = ["Arsalan", "Ali", "Mohsin"];
let great_magicians = make_great(magicians_names);
show_magicians(great_magicians);
