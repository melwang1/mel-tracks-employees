
const mysql = require('mysql2');

//CONNECT TO LOCAL DATABASE
const db = mysql.createConnection(
    {
        host: '127.0.0.1',
        user: 'root',
        password: 'giraffecamO2',
        database: 'employee_db'
    }
)

module.exports = db;