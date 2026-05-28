import { Tabla } from "../models/alumnos.models.js";

Tabla.create({
     nombre:"Coffee",
     edad: 20,
     materia: "Todas"
})

export const test = () => console.log("Llamando el controlador en app")