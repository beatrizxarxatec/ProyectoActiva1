"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUserLogin = void 0;
const config_js_1 = require("../../config.js");
// CONSULTAS A LA BD
function checkUserLogin(user, callback) {
    const queryString = "SELECT * FROM user WHERE email = ? AND password = ?"; // ? parametro
    config_js_1.db.query(queryString, [user.email, user.password], (err, result) => {
        let isOk = true;
        let studentId = 0;
        let email = "";
        if (err || result.length == 0) {
            isOk = false;
        }
        else {
            const student = result[0];
            email = user.email;
            studentId = student.id;
        }
        const loginResult = {
            isOk: isOk,
            email: email,
            studentId: studentId,
        };
        callback(null, loginResult);
    });
}
exports.checkUserLogin = checkUserLogin;
;
