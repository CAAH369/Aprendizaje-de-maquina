import mongose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {test} from "./backend/controllers/alumnos.controllers.js"

//conexion a la base de datos
dotenv.config;
mongoose.connect(process.env.url_bd)
.then(() console.log("todo jala chido en la base de datos"))
.catch( => console.log("no funciono este pedo"))

//creacion de un servidor local
const app = express();
app.use(cors());

app.listen( () => console.log("funciona el servidor"))

test()