const express = require('express');
const mysql = require('mysql2');
const PORT = 3001;

const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//CONNECT TO LOCAL DATABASE
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'giraffecamO2',
        database: 'library_db'
    },
    console.log(`Connected to the database`)
)