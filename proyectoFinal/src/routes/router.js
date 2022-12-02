"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const insertStudent_js_1 = require("../handlers/student/insertStudent.js");
const getStudents_js_1 = require("../handlers/student/getStudents.js");
const getOneStudent_js_1 = require("../handlers/student/getOneStudent.js");
const getStudentsFiltered_js_1 = require("../handlers/student/getStudentsFiltered.js");
const checkLogin_js_1 = require("../handlers/student/checkLogin.js");
const router = express_1.default.Router();
exports.router = router;
router.post("/students", insertStudent_js_1.insertStudent);
router.get("/students", getStudents_js_1.getStudents);
router.get("/students/:id_student", getOneStudent_js_1.getOneStudent);
router.get("/filtered", getStudentsFiltered_js_1.getStudentsFiltered);
router.post("/login", checkLogin_js_1.checkLogin);
