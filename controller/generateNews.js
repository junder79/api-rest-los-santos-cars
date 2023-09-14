import  cheerio from 'cheerio';
import Noticia from '../models/Noticias.js';

const url = 'https://rockstarintel.com/category/news/';

const generateNews = async (req,res) =>{
    try {
        const response = await fetch(url);

        const html = await response.text();
        const $ = cheerio.load(html);


        // Obtener el primero de la lista y validar de que no exista en BD
        const firtArticleTittle = $('.post-title').first().text();
        
        const isValid = await Noticia.find({titulo: firtArticleTittle});
        console.log(isValid);
        if(isValid.length === 0 ) {
            const primerArticulo = $('.l-post.grid-post.grid-base-post').first();
            const spanImagen = primerArticulo.find('.image-link.media-ratio.ratio-16-9 .img');
            const urlImagen = spanImagen.attr('data-bgsrc');
            const article = {
                titulo : firtArticleTittle,
                link : $('.post-title').first().find('a').attr('href'),
                imagen: urlImagen,
                fecha:  $('.post-date').first().text(),
                description: $('.excerpt p ').first().text(),
            }


            const noticia = new Noticia(article);
            const noticiaAlmacenada = await noticia.save();
            return res.json({ status: 201, message: 'News Save' });
           
        }       
       
        res.json({ status: 200, message: "not news for save" });
    } catch (error) {
        console.log("error ", error);
        res.json({ status: 400, message: 'Error al listar el newswire'});
    }
}


export {generateNews};