import Noticia from '../models/Noticias.js';
import puppeteer from 'puppeteer';

const url2 = 'https://www.rockstargames.com/es/newswire';
const registrarNoticia = async (req,res) =>{
    try {
        const noticia = new Noticia(req.body);
        const noticiaAlmacenada = await noticia.save();
        res.json({ status: 200, message: 'Noticia agregada' });
    } catch (error) {
        res.json({ status: 400, message: 'Error al ingresar noticia'});
    }
}

const newswire_rockstar_games = async () => {
   try {
    const browser = await puppeteer.launch({
        headless: 'new' // Configuración para utilizar el nuevo modo Headless
      });
    const page = await browser.newPage();

    await page.goto(url2, { waitUntil: 'networkidle2' });

    const values = await page.$$eval('a[data-gtm-label][data-gtm-category="Newswire"]', elements => {
        return elements.map(element => {
            const divElement = element.querySelector('div'); // Obtener el primer <div> dentro de <a>
            const backgroundImage = divElement ? divElement.style.backgroundImage : null; // Obtener el valor de background-image
            const url = backgroundImage ? backgroundImage.replace(/^url\(['"](.+)['"]\)$/, '$1') : null;
            const timeElement = element.querySelector('time'); // Obtener el elemento <time> dentro de <a>
            const timeValue = timeElement ? timeElement.innerText : null; // Obtener el valor de <time>
            return {
                action: element.getAttribute('data-gtm-label'),
                category: element.getAttribute('data-gtm-category'),
                url: element.getAttribute('href'),
                backgroundImage: url,
                time: timeValue
            };
        });
    });
    await browser.close();
    return values;
   } catch (error) {
    res.json({ status: 400, message: 'Error en newswire_rockstar_games'});
   }
    
}

const getNoticias = async (req,res) =>{
    try {
      //  const noticias = await Noticia.find().sort({_id:-1});  
        const news_rockstar = await newswire_rockstar_games();
        let i = 0;
        console.log("data from rockstar ", news_rockstar);
        const noticiasRockstar = news_rockstar.map(function (articulos,i)  {
            return {
                _id: i+1,
                titulo: articulos.action,
                link: "https://www.rockstargames.com" + articulos.url,
                imagen: articulos.backgroundImage,
                fecha: articulos.time,
                __v: 0
            }
        } )
        res.json(noticiasRockstar);
    } catch (error) {
        console.log("errorrrr ", error);
        res.json({ status: 400, message: 'Error al buscar las noticia'});
    }

}

export {registrarNoticia,getNoticias};