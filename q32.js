"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let current_users = ["Alisha", "Nimra", "Arsalan", "Aalam", "Ashraf"];
let new_users = ["Sadaf", "Iqra", "Alisha", "Nimra"];
new_users.forEach(new_one_user => {
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase());
    if (our_condition) {
        console.log(`Sorry ${new_one_user} is already taken!`);
    }
    else {
        console.log(`This Username is ${new_one_user} is available`);
    }
});
