"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findReceiveRewards = exports.findStudentsFiltered = exports.findOneStudent = exports.findAllStudents = exports.createStudent = exports.findRewards = exports.addNewReward = void 0;
const config_js_1 = require("../../config.js");
function addNewReward(reward, callback) {
    const queryString = "INSERT INTO reward (id_user_sender, id_user_rewarded, xp_points, date, description) VALUES (?, ?, ?, ?, ?)";
    config_js_1.db.query(queryString, [reward.idUserSender, reward.idUserRewarded, reward.xpPoints, reward.date, reward.description], (err, result) => {
        if (err) {
            callback(err, null);
        }
        else {
            const insertId = result.insertId;
            callback(null, insertId);
        }
    });
}
exports.addNewReward = addNewReward;
;
function findRewards(currentUserId, callback) {
    const queryString = "select r.id_user_sender, r.id_user_rewarded, r.xp_points, r.description, r.date, s.name, s.first_surname from reward as r inner join student as s on r.id_user_rewarded = s.id where r.id_user_sender = ? order by date DESC";
    config_js_1.db.query(queryString, [currentUserId], (err, result) => {
        if (err)
            callback(err, null);
        const rewards = result;
        callback(null, rewards);
    });
}
exports.findRewards = findRewards;
function findReceiveRewards(currentUserId, callback) {
    const queryString = "select r.id_user_sender, r.id_user_rewarded, r.xp_points, r.description, r.date, s.name, s.first_surname from reward as r inner join student as s on r.id_user_rewarded = s.id where r.id_user_sender = ? order by date DESC";
    config_js_1.db.query(queryString, [currentUserId], (err, result) => {
        if (err)
            callback(err, null);
        const rewards = result;
        callback(null, rewards);
    });
}
exports.findReceiveRewards = findReceiveRewards;
function createStudent(student, callback) {
    const queryString = "INSERT INTO student (name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code) VALUES (?, ?, ?, ?, ?, ?, ?)";
    config_js_1.db.query(queryString, [student.name, student.firstSurname, student.secondSurname, student.personalEmailAddress, student.activaEmailAddress, student.phoneNumber, student.zipCode], (err, result) => {
        if (err) {
            callback(err, null);
        }
        ;
        const insertId = result.insertId;
        callback(null, insertId);
    });
}
exports.createStudent = createStudent;
;
function findAllStudents(callback) {
    const queryString = "SELECT id, name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code FROM student";
    config_js_1.db.query(queryString, (err, result) => {
        if (err)
            callback(err, null);
        const students = result;
        callback(null, students);
    });
}
exports.findAllStudents = findAllStudents;
function findOneStudent(id, callback) {
    const queryString = "SELECT name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code FROM student WHERE id = ?";
    config_js_1.db.query(queryString, [id], (err, result) => {
        if (err) {
            callback(err, null);
        }
        ;
        const studentFound = result[0];
        callback(null, studentFound);
    });
}
exports.findOneStudent = findOneStudent;
function findStudentsFiltered(callback) {
    const queryString = "SELECT name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code " +
        "FROM student " +
        "WHERE second_surname is not null and email_personal like '%@gmail.com'";
    config_js_1.db.query(queryString, (err, result) => {
        if (err)
            callback(err, null);
        const students = result;
        callback(null, students);
    });
}
exports.findStudentsFiltered = findStudentsFiltered;
