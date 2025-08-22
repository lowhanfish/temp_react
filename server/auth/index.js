import express from "express";
import Joi from "joi";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import uniqid from "uniqid";
import db from "../db/mysql/egov.js";

const router = express.Router();

const schema = Joi.object({
    username : Joi.string()
    .pattern(new RegExp('/^[a-zA-Z0-9_]*$/'))
    .alphanum()
    .min(6)
    .max(12)
    .required(),
    password : Joi.string()
    .pattern(new RegExp('/^[a-zA-Z0-9_]*$/'))
    .alphanum()
    .min(6)
    .max(12)
    .required(),
})


const respondError422 = (res, next, text)=>{
res.status(422);
    const error = new Error(text);
    next(error);
}


router.get('/', (req, res)=>{
    res.json({
        message: 'login active'
    });
})



router.post('/login', (req, res, next)=>{

    const result = schema.validate({ username: req.body.username, password: req.body.password });
    console.log(result);

    res.send(result)


})


router.post('/general_register',(req, res)=>{
    



})


