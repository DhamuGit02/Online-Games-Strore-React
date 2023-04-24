const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const bodyParser = require('body-parser')


const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.listen(8000, () => { console.log("server running!") })

const mysqlObj = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '[your password else leave it blank]',
    database: 'GameStoreDB'
})

app.post('/api/register', (req, res) => {
    const query = "INSERT INTO users VALUES(?, ?, AES_ENCRYPT(?, '" + req.body.uname + "'), ?, ?)"
    const values = [req.body.mobno, req.body.name, req.body.pass, req.body.age, req.body.uname]
    mysqlObj.query(query, values, (error, data) => {
        if (error) return res.json(error)
        else return res.json(true)
    })
    console.log(query, values)
})

app.post('/api/get-user', (req, res) => {
    const query = "SELECT id, username,  CONVERT(AES_DECRYPT(password, '" + req.body.uname + "') USING utf8) as password FROM users WHERE AES_ENCRYPT('" + req.body.password + "', '" + req.body.uname + "') = password AND username = '" + req.body.uname + "'"
    mysqlObj.query(query, (error, data) => {
        if (error) return res.json(error)
        else {
            if (data.length != 0) return res.json(data)
            else return res.json(false)
        }
    })
    console.log(query)
})

app.post('/api/search', (req, res) => {
    const query = "SELECT title FROM games WHERE title LIKE '%" + req.body.searchQuery + "%'"
    mysqlObj.query(query, (error, data) => {
        if (error) return res.json(error)
        else return res.json(data)
    })
    console.log(query)
})

app.post('/api/get-games/category', (req, res) => {
    if(req.body.category === 'Discover') {
        const query = "SELECT title, price, discount FROM games"
        mysqlObj.query(query, (error, data) => {
            if(error) return res.json(error)
            else return res.json(data)
        })
    }
    else {
        const query = `SELECT title, price, discount FROM games WHERE category = '${req.body.category}'`
        mysqlObj.query(query, (error, data) => {
            if (error) console.log(error)
            else res.json(data)
        })
        console.log(query)
    }
})

app.get('/api/get-games/category/under-18-games', (req, res) => {
    req = "SELECT title, price, discount FROM games WHERE pegi = 'UA'"
    mysqlObj.query(req, (error, data) => {
        if(error) res.json(error)
        else return res.json(data)
    })
})

app.get('/api/get-all-games', (req, res) => {
    req = "SELECT title, price, discount FROM games"
    mysqlObj.query(req, (error, data) => {
        if(error) return res.json(error)
        else return res.json(data)
    })
})

app.get('/api/gameinfopage/:gameTitle', (req, res) => {
    console.log(req.params.gameTitle)
    const query = `SELECT * FROM games WHERE title = '${req.params.gameTitle.replaceAll("-", " ")}'`
    mysqlObj.query(query, (error, data) => {
        if(error) return res.json(error)
        else return res.json(data)
    })
})

app.get('/user/:uid', (req, res) => {
    const query = `SELECT username FROM users WHERE id=${req.params.uid}`
    mysqlObj.query(query, (error, data) => {
        if(error) return res.json(error)
        else return res.json(data)
    })
})

app.get("/api/get-cpu", (req, res) => {
    req = "SELECT DISTINCT cpu FROM games WHERE cpu LIKE '%Intel%' AND cpu LIKE '%AMD%'"
    mysqlObj.query(req, (error, data) => {
        if(error) return res.json(error)
        else return res.json(data)
    })
})

app.post("/api/get-compatible-games", (req, res) => {
    const values = [req.body.os, req.body.cpu, req.body.gpu, req.body.ram, req.body.sound_card, req.body.hdd]
    //TODO
    //Yaha pe proper fetching karna based on compatibilty specs provided by user and write SQL query for fetching
    const query = `SELECT * FROM games WHERE os LIKE '%${req.body.os}%' AND cpu LIKE '%${req.body.cpu}%' AND gpu LIKE '%${req.body.gpu}%'AND ram <= ${req.body.ram} AND sound_card LIKE '%${req.body.sound_card}%' AND hdd <= ${req.body.hdd}`

    // res.json(query)
    mysqlObj.query(query, values, (error, data) => {
        if(error) return res.json(error)
        else res.json(data)
    })
})
