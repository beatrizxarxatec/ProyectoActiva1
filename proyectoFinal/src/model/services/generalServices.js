"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUserLogin = void 0;
const config_js_1 = require("../../config.js");
function checkUserLogin(user, callback) {
    const queryString = "SELECT * FROM user WHERE email = ? AND password = ?";
    config_js_1.db.query(queryString, [user.email, user.password], (err, result) => {
        let isOk = true;
        if (err || result.length == 0) {
            isOk = false;
        }
        const loginResult = {
            isOk: isOk,
        };
        callback(null, loginResult);
    });
}
exports.checkUserLogin = checkUserLogin;
;
