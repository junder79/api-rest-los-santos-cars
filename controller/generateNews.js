
const url2 = 'https://www.rockstargames.com/es/newswire';
const generateNews = async (req,res) =>{
    try {
       
        res.json({ status: 200, message: 'List newswire' });
    } catch (error) {
        res.json({ status: 400, message: 'Error al listar el newswire'});
    }
}


export {generateNews};