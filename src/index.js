// require('dotenv').config({path: './.env'});
import dotenv from "dotenv";
dotenv.config({path: './.env'});
import mongoose, { connect } from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
import connectDB from "./db/index.js";

// console.log(process.env.MONGODB_URI);
connectDB()




















/*
(async ()=> {try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
    app.on("error", (error) => {console.error('Error: ', error); throw error})
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT} `);
    })
} catch(error){
    console.error('Error: ', error);
    throw error
}
})()*/