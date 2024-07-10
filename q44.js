"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeSandwish(...items) {
    console.log("\nMaking a Sandwish with the following items:\n");
    items.forEach(singleitems => console.log("-" + singleitems));
    console.log("\nNow Enjoying Sandwish!");
}
makeSandwish(`Bread`, `Butter`);
makeSandwish(`Chicken`, `Cheese`, `Egg`);
makeSandwish(`Chicken`, `Cheese`, `Butter`, `Bread`, `Egg`, `Mayo`, `Tomato`);
