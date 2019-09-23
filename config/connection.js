{
 const development = {
   database: 'Inready',
   username: 'root',
   password: '',
   host: 'localhost',
   dialect: 'mysql',
 }
 
 const test = {
   database: 'Inready',
   username: 'root',
   password: '',
   host: 'localhost',
   dialect: 'mysql',
 }
 
 const production = {
   database: process.env.DB_NAME,
   username: process.env.DB_USER,
   password: process.env.DB_PASS,
   host: process.env.DB_HOST || '127.0.0.1',
   dialect: 'mysql',
 }
 
 module.exports = {
   development,
   test,
   production,
 } 
}

