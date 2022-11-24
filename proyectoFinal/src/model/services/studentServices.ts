import { Student } from "../types/student.js";
import { db } from "../../config.js";
import { OkPacket, RowDataPacket } from "mysql2";
import { Reward } from "../types/Reward.js";

function addNewReward(reward: Reward, callback: Function) {
  const queryString = "INSERT INTO reward (id_user_sender, id_user_rewarded, xp_points, date, description) VALUES (?, ?, ?, ?, ?)"

  db.query(
    queryString,
    [reward.idUserSender, reward.idUserRewarded, reward.xpPoints, reward.date, reward.description],
    (err, result) => {
      if (err) {
        callback(err, null)
      }
      else {
        const insertId = (<OkPacket>result).insertId;
        callback(null, insertId);
      }
    }
  );
};

function findRewards(currentUserId: number, callback: Function) {
  const queryString = "select r.id_user_sender, r.id_user_rewarded, r.xp_points, r.description, r.date, s.name, s.first_surname from reward as r inner join student as s on r.id_user_rewarded = s.id where r.id_user_sender = ?";
  db.query(queryString, [currentUserId], (err, result) => {
    if (err) callback(err, null);
    const rewards = result;
    callback(null, rewards);
  })
}

function createStudent(student: Student, callback: Function) {
  const queryString = "INSERT INTO student (name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code) VALUES (?, ?, ?, ?, ?, ?, ?)"

  db.query(
    queryString,
    [student.name, student.firstSurname, student.secondSurname, student.personalEmailAddress, student.activaEmailAddress, student.phoneNumber, student.zipCode],
    (err, result) => {
      if (err) { callback(err, null) };

      const insertId = (<OkPacket>result).insertId;
      callback(null, insertId);
    }
  );
};

function findAllStudents(callback: Function) {
  const queryString = "SELECT id, name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code FROM student";
  db.query(queryString, (err, result) => {
    if (err) callback(err, null);

    const students = result;
    callback(null, students);
  })
}

function findOneStudent(id: string, callback: Function) {

  const queryString = "SELECT name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code FROM student WHERE id = ?";
  db.query(queryString, [id], (err, result) => {
    if (err) { callback(err, null) };

    const studentFound: Student = (<RowDataPacket>result)[0];

    callback(null, studentFound);
  })
}
function findStudentsFiltered(callback: Function) {
  const queryString = "SELECT name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code " +
    "FROM student " +
    "WHERE second_surname is not null and email_personal like '%@gmail.com'";

  db.query(queryString, (err, result) => {
    if (err) callback(err, null);

    const students = result;
    callback(null, students);
  })
}

export { addNewReward, findRewards, createStudent, findAllStudents, findOneStudent, findStudentsFiltered };