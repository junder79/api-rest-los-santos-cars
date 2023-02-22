import mongoose from "mongoose";
import bcrypt from "bcrypt";
const usuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    confirmado: {
        type: Boolean,
        default: false
    },
},
{
    timestamps:true
}
);
// middelware
usuarioSchema.pre('save', async function(next){
if(!this.isModified('save')){ // si no esta modificando el password que no haga nada 
    next();
}
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const Usuario = mongoose.model("Usuario", usuarioSchema);
export default Usuario;