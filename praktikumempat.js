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
app.listen(8003, () => {
    console.log("Server run on port 8003");
   })

//end point BMI 
app.post("/bmi",(req,res)=>{
    let berat = Number(req.body.berat)
    let tinggi = Number(req.body.tinggi)
    let bmi = berat / (tinggi * tinggi)
    let status = ""

    //objek data yang akan dijadikan respon
    if(bmi < 18.5) {
        status = "berat badan kurang"
    }
    else if(bmi >= 18.5 && bmi < 25) {
        status = "normal"
    }
    else if(bmi >= 25 && bmi < 30) {
        status = "berat badan berlebih"
    }
    else if(bmi >=30) {
        status = "berat badan obesitas"
    }

    let response = {
        berat: berat,
        tinggi: tinggi, 
        bmi: bmi,
        status: status
    }
    res.json(response)
})
