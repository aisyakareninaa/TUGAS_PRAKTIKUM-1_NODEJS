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
app.listen(8001, () => {
    console.log("Server run on port 8001");
   })

//end point suhu celcius 
app.get("/celcius/:angka",(req,res) => {
  let angka = Number (req.params.angka)
  let reamur = 4/5 * angka
  let kelvin = angka + 273 
  let fahrenheit = (9/5) * angka + 32

  let response ={
    celcius: angka, 
    reamur: reamur, 
    kelvin: kelvin,
    fahrenheit: fahrenheit
  }
   res.json(response)
})

//end point suhu reamur 
app.get("/reamur/:angka",(req,res) => {
    let angka = Number (req.params.angka)
    let celcius = 5/4 * angka
    let kelvin = 5/4 * angka + 273 
    let fahrenheit = (9/4 * angka) + 32
  
    let response ={
      reamur: angka, 
      celcius: celcius, 
      kelvin: kelvin,
      fahrenheit: fahrenheit
    }
     res.json(response)
  })

  //end point kelvin 
  app.get("/kelvin/:angka",(req,res) => {
    let angka = Number (req.params.angka)
    let reamur = 4/5 * (angka - 273)
    let celcius = angka - 273 
    let fahrenheit = (angka * 9/5) - 459
  
    let response ={
      kelvin: angka, 
      reamur: reamur, 
      celcius: celcius,
      fahrenheit: fahrenheit
    }
     res.json(response)
  })

  //end point fahrenheit
  app.get("/fahrenheit/:angka",(req,res) => {
    let angka = Number (req.params.angka)
    let reamur = 4/9 * (angka - 32)
    let celcius = (angka - 32) * 5/9
    let kelvin = (angka + 459 ) * 5/9 
  
    let response ={
      fahrenheit: angka, 
      reamur: reamur, 
      celcius: celcius,
      kelvin: kelvin
    }
     res.json(response)
  })



