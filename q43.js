"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great(magicians) {
    return magicians.map(name => `The great ${name}`);
}
let magicians_names = ["Arsalan", "Ali", "Mohsin"];
let copy_magicians_names = magicians_names.slice();
let copy_great_magicians = make_great(copy_magicians_names);
console.log("\n Original Array \n");
show_magicians(magicians_names);
console.log("\n Copy Array \n");
show_magicians(copy_magicians_names);
