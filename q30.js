"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let userNames = ["Iqra", "Sadaf", "Alisha", "Nimra"];
userNames.forEach(oneUser => {
    if (oneUser === "Admin") {
        console.log(`Hello ${oneUser}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${oneUser},Thank you! for logging in again!`);
    }
});
