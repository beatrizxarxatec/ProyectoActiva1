import express from 'express';
import { Student } from '../../model/types/student.js';
import {findStudentsFiltered} from '../../model/services/studentServices.js';

async function getStudentsFiltered(req: express.Request, res: express.Response){
    findStudentsFiltered((err:Error, students:Student[])=>{
        if(err){
            return res.status(404).json({"message": err.message});
        }
        console.log(typeof(students[0]));
        res.status(200).json(students);
    })
}

export {getStudentsFiltered};