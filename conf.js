const anio= document.getElementById('anio')


function Calcularedad(){
    const edad=2026- Number(anio.value);
    if (edad >= 18){
        window.location.href ="index.html"
    } else {
        alert("No puedes acceder")
    }
    
}

