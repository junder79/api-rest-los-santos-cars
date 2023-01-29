import mongoose from "mongoose";

const noticiasSchema = mongoose.Schema({
    titulo:{
        type:String,
        required: true,
        trim:true
    },
    link:{
        type:String,
        required:true,
    },
    imagen:{
        type:String,
        required:true,
        trim:true
    }
})

const Noticias = mongoose.model('Noticias', noticiasSchema);
export default Noticias;