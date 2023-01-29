import express from 'express';
import conectarDB from './config/db.js';
import dotenv from 'dotenv';
import vehiculoRouter from './routes/vehiculoRoutes.js';
import categoriaRoute from './routes/categoriaRoute.js';
import noticiaRouter from './routes/noticiaRoute.js';

const app = express();
//app.use(express.json());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
dotenv.config();


conectarDB();

// routing

app.use("/api/vehiculos", vehiculoRouter);
app.use("/categoria",categoriaRoute);
app.use("/noticia",noticiaRouter)

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log("server encendidosss ", PORT);
})