//Se importan elementos importantes como express, dotenv.  
import express from 'express';
import "dotenv/config";

//Se importan rutas
import userRoutes from './routes/user.routes.js'; //Se importan las rutas


const app = express()

//Middlewars: funciones que se ejecutan antes de llegar a la ruta.

//Permite interpretar los datos que se envian al servidor en formato en json y transformarlo en un req.body.
app.use(express.json());




//Se importan las rutas
app.use(userRoutes);


export default app;
