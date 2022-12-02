import { User } from "../types/User.js";
import { db } from "../../config.js";
import { RowDataPacket } from "mysql2";
import { LoginResult } from "../types/LoginResult.js";
import { Student } from "../types/student.js";

// CONSULTAS A LA BD
function checkUserLogin(user: User, callback: Function) {
  const queryString = "SELECT s.id, s.email_personal FROM user u inner join student s on s.email_personal = u.email where email = ? AND password = ?"; // ? parametro
  db.query(queryString, [user.email, user.password], (err, result) => {
    let isOk = true;
    let studentId = 0;
    let email = "";
    if (err || (result as RowDataPacket[]).length == 0) {
      isOk = false;
    }
    else{
      const student: Student = (<RowDataPacket>result)[0];
      email = user.email;
      studentId = student.id;
    }
    const loginResult: LoginResult = {
      isOk: isOk,
      email: email,
      studentId: studentId,
    };
    callback(null, loginResult);
  })
};

export { checkUserLogin };