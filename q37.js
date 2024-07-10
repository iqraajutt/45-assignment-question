"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = "Large", printMessage = "I love typescript!") {
    console.log(`Creating a ${size} shirt with ${printMessage}`);
}
make_shirt();
make_shirt("Medium");
make_shirt("small", "I Love javascript");
