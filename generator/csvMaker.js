const carrera = "ciencias-computacion";
const anno = "2021" 

const dataset = require(`../${anno}/${carrera}/json`);
const fs = require('fs');
const stream = fs.createWriteStream(`${anno}/${carrera}/puntajes.csv`);

dataset.json.forEach((element) =>{
    stream.write(element.puntaje + ' aciertos,' + element.cantidad + '\n')
});