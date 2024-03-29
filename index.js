import express from 'express';
import cors from 'cors';
import conectarDB from './config/db.js';
import dotenv from 'dotenv';
import vehiculoRouter from './routes/vehiculoRoutes.js';
import categoriaRoute from './routes/categoriaRoute.js';
import noticiaRouter from './routes/noticiaRoute.js';
import generateNews from "./routes/generateNews.js";

const app = express();
app.use(cors())
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));
dotenv.config();


conectarDB();

// routing

app.use("/api/vehiculos", vehiculoRouter);
app.use("/categoria", categoriaRoute);
app.use("/noticia", noticiaRouter)
app.use("/validateNews", generateNews)
//app.use("/login", usuarioRouter);


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log("server encendidosss ", PORT);
})