/* INITIAL MIGRATION
CREATE TABLE projects (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, title VARCHAR(50) NOT NULL,description VARCHAR(255) NOT NULL, github VARCHAR(255) NOT NULL, link VARCHAR(255) NOT NULL, image VARCHAR(255) NOT NULL, stack VARCHAR(255) NOT NULL, video VARCHAR(255) NOT NULL);
CREATE TABLE profile (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, name VARCHAR(30) NOT NULL, description TEXT NOT NULL, image VARCHAR(255) NOT NULL);
CREATE TABLE testimonies (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50) NOT NULL,text VARCHAR(255) NOT NULL, position VARCHAR(255) NOT NULL);
*/

const mysql = require('mysql2')

class DBConnection {
    constructor(){
        this.connection;
    }

    connect(){
        this.connection = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            port: process.env.DB_PORT,
          }, ()=>{console.log('conected')});
    }

    async list(table){
        return new Promise((res, rej)=>{
            this.connection.query(`SELECT * FROM ${table}`, (err, result)=>{
                if(err) rej(err)
                else res(result)
            })
        })
    }
}

module.exports = { DBConnection:new DBConnection()  }
