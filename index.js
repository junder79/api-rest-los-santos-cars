import express from 'express';
import conectarDB from './config/db.js';
import dotenv from 'dotenv';
import vehiculoRouter from './routes/vehiculoRoutes.js';
const app = express();
app.use(express.json());
dotenv.config();


conectarDB();

// routing

app.use("/api/vehiculos", vehiculoRouter);


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log("server encendidosss ", PORT);
})