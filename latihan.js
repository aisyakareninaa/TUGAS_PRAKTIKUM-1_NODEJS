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
app.listen(8006, () => {
    console.log("Server run on port 8006");
   })

//End-point KALKULATOR 
app.get("/kalkulator/:angkasatu/:angkadua", (req,res) => {
    let angkasatu = Number (req.params.angkasatu)
    let angkadua = Number (req.params.angkadua)

    let pertambahan = angkasatu + angkadua 
    let perkurangan = angkasatu - angkadua 
    let perkalian = angkasatu * angkadua 
    let pembagian = angkasatu / angkadua


    let response = {
        angka_satu: angkasatu,
        angka_dua: angkadua,
        pertambahan: pertambahan,
        perkurangan: perkurangan,
        perkalian: perkalian, 
        pembagian: pembagian
 }
 // memberikan response dengan format JSON yang berisi objek di atas
 res.json(response)
})

//End-point Perulangan
app.post("/perulangan",(req,res)=>{
    let awal = Number(req.body.awal)
    let akhir = Number(req.body.akhir)
    let kelipatan = Number(req.body.kelipatan)
    let i 
    let tampung=new Array()
    let total=0;

    for (i=awal;i<=akhir;i+=kelipatan){
        tampung.push(i)
        total += i
    }

    let response={
        tampung,
        total : total
    }
    res.json(response)
})

//End-Point Array 
app.post("/penjumlahanarray",(req,res)=>{
    let MatrixA = [
        [1, 2],
        [3, 4]
    ];
    let MatrixB = [
        [1, 2],
        [4, 6]
    ];

    let hasil=new Array()
    let i 
    let j 
    for (i=0; i< 2;i++){
        for (j=0;j<2;j++){
            hasil.push(MatrixA[i][j]+MatrixB[i][j])
        }
    }

    let response={
        MatrixA: MatrixA,
        MatrixB: MatrixB,
        penjumlahan: hasil
    }

    res.json(response)
})