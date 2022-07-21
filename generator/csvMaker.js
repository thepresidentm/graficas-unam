const carrera = "ciencias-computacion";
const dataset = require(`${carrera}./json`);
const fs = require('fs');
const stream = fs.createWriteStream(`${carrera}/puntajes.csv`);

dataset.json.forEach((element) =>{
    stream.write(element.puntaje + ' a,' + element.cantidad + '\n')
});