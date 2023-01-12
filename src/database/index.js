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
