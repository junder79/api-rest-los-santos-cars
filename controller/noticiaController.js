import Noticia from '../models/Noticias.js';

const registrarNoticia = async (req,res) =>{
    try {
        const noticia = new Noticia(req.body);
        const noticiaAlmacenada = await noticia.save();
        res.json({ status: 200, message: 'Noticia agregada' });
    } catch (error) {
        res.json({ status: 400, message: 'Error al ingresar noticia'});
    }
}

const getNoticias = async (req,res) =>{
    try {
        const noticias = await Noticia.find().sort({_id:-1});  
        res.json(noticias);    
    } catch (error) {
        res.json({ status: 400, message: 'Error al ingresar noticia'});
    }

}

export {registrarNoticia,getNoticias};