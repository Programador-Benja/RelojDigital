const horaReloj = document.getElementById("hora");
const fechaReloj = document.getElementById("fecha");


const mostrarReloj =  () =>{
    const fecha = new Date();
    let hs = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    let horaCompleta = hs + ":" + min + ":" + seg;

    horaReloj.innerHTML = horaCompleta;
    fechaReloj.innerHTML = mostrarFecha(fecha);
}

const formatoHora = (hora) =>{
    if (hora < 10){
        hora = '0' + hora;
    }
    return hora;
}

const mostrarFecha = (fecha) =>{
    const meses = ["Ene", "Feb", "Mar", "Abr", "Mayo", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    const dias = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];

    let mes = meses[fecha.getMonth()];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let year = fecha.getFullYear();
    let mostrarFechaTexto = diaSemana + "" + dia + "," + mes + " " + year;

    return mostrarFechaTexto;
}

//Llamamos a la funcion
mostrarReloj();

//Llama a la funcion cada 1 seg
setInterval(mostrarReloj,1000);
