"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let userNames = ["Iqra", "Sadaf", "Alisha", "Nimra"];
userNames = [];
if (userNames.length === 0) {
    console.log("We need to find some users!");
}
else {
    userNames.forEach(oneUser => {
        if (oneUser === "Admin") {
            console.log(`Hello ${oneUser},Would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${oneUser},Thank you! for logging in again!`);
        }
    });
}
