// Copiar y ejecutar esta funcion en la pagina que contenga los resultados de una determinada carrera
// getData()
// Devolvera un array de jsons
// Pegar ese resultado en el modulo json y ejecutar el csvmaker

function getData() {
    let filas = document.getElementsByTagName('tr');
    let tabla = new Array();
    let puntajes = new Array();
    for (let i = 0; i < filas.length; i++) {
        try {
            let actual = parseInt(filas[i].children[1].innerHTML.replace(" ", ""));
            if (!isNaN(actual)) {
                puntajes.push(actual);
            }
        } catch (e) {
            console.log(e);
            console.log(`Se ha omitido el elemento ${i} que conciste de ${filas[i]}`);
        }
    }

    for (let i = 0; i < 121; i++) {
        let json = {};
        let cantidad = puntajes.filter((element) => {
            return element == i;
        });

        cantidad = cantidad.length;
        json.puntaje = i;
        json.cantidad = cantidad;
        tabla.push(json);
    }

    console.log(tabla);
}
