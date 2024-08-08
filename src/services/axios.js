//instaciamos el cliente axios
import axios from "axios";

const instance = axios.create({
  //esto es la base de la api, sin ningun endpoint aun
  baseURL: "https://restcountries.com/v3.1",
})

console.log("Desarrollado por gduarte2999@gmail.com");


export default instance