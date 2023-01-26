const selectElement = document.querySelector('.opcion');
selectElement.addEventListener('change', (event) => {
    const resultado = document.querySelector('.resultado');

    resultado.textContent = `Usted requiere a un ${event.target.value}`;
});

document.getElementById("boton").addEventListener("click", function () {
    document.body.style.backgroundColor = "#000000";    
})

document.getElementById("botonRestaurar").addEventListener("click", function () {
    document.body.style.backgroundColor = "#FFFFFF";    
})

