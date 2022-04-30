import {config}from 'dotenv'
config();
export default{
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    port:process.env.port,
    database:process.env.database
}