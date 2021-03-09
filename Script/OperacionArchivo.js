
console.log("fuciona");

const csvtojson = require('csvtojson')

const fs = require('fs')

//const { join } = require('node:path');
const csvfilepath = "../Script/simple.csv"

csvtojson()
.fromFile(csvfilepath)
.then((json) => {
    console.log(json)
 
    fs.writeFileSync("../Script/output.json", JSON.stringify(json), "utf-8", (err) => {
        const miTitulo = document.querySelector('h1');

        if(err) miTitulo.textContent = err;
    })  
})



//const CSVToJSON = require("csvtojson");
//const JSONtoCSV = require("json2csv").parse;
//const FileSystem = require("fs"); 
//
//csvtojson().fromFile("./source.csv").then(source => {
//    console.log(source);
//    source.push({
//       "sku": "78962",
//         "title": "Fornite",
//        "hardware": "Nintendo  Switch",
//         "price": "00.00"
//    })    
//    const csv = JSONtoCSV(source, {fields: ["sku", "title", "harware", "price"]})
//    FileSystem.writeFileSync("./destination.csv", csv);
//});
