import  jwt  from "jsonwebtoken";

const generarJWT = (nombre,id) => {
    return jwt.sign({nombre: nombre, id :id }, process.env.JWR_SECRET, {expiresIn: '30d'});
}

export default generarJWT;