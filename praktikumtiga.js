//memanggil ke dalam project

const express = require("express") // memanggil library express js 
/*const : variable yang nilainya tetap
  require : variable yang digunakan untuk memanggil library ke project*/
const bodyParser = require("body-parser") // memanggil library bodyparser
const cors = require("cors") // memanggil library cors
const app = express()
//app : memanggil function supaya bisa running

// menggunakan

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())
// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))
// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors()) 

//SERVER PORT 
app.listen(8002, () => {
    console.log("Server run on port 8002");
   })

//desimal
   app.post("/desimal", (req,res) => {
    let d = Number(req.body.d)
    let b = d.toString(2)
    let o = d.toString(8)
    let h = d.toString(16).toUpperCase()
    let response = {
        desimal: d,
        result: {
            biner: b,
            oktal: o,
            hexadesimal: h
        }
    }
    res.json(response)
})

//biner
app.post("/biner", (req,res) => {
    let biner = Number(req.body.biner)
    let d = parseInt(biner, 2)
    let o = parseInt(biner, 2).toString(8)
    let h = parseInt(biner, 2).toString(16).toUpperCase()
    let response = {
        biner: biner,
        result: {
            desimal: d,
            oktal: o,
            hexadesimal: h
        }
    }
    res.json(response)
})


//oktal
app.post("/oktal", (req,res) => {
    let octal = Number(req.body.octal)
    let d = parseInt(octal, 8).toString(10)
    let b = parseInt(octal, 8).toString(2)
    let h = parseInt(octal, 8).toString(16).toUpperCase()
    let response = {
        oktal: octal,
        result: {
            desimal: d,
            biner: b,
            hexadesimal: h
        }
    }
    res.json(response)
})

//hexadesimal
app.post("/hexadesimal", (req,res) => {
    let hexadecimal = Number(req.body.hexadecimal)
    let d = parseInt(hexadecimal, 16).toString(10)
    let b = parseInt(hexadecimal, 16).toString(2)
    let o = parseInt(hexadecimal, 16).toString(8)
    let response = {
        hexadesimal: hexadecimal,
        result: {
            desimal: d,
            biner: b,
            oktal: o
        }
    }
    res.json(response)
})