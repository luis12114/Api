import mysql from "mysql";
import config from "./config";

const conexion = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  port: config.port_msql,
  database: config.database,
});
conexion.connect((error) => {
    if(error){
        console.log("ha ocurrido un error"+ error);
    }else{
        console.log("La base de datos se conecto!!!");
    }
});

export default conexion;