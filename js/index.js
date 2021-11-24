let cheks = document.querySelectorAll(".btn-check");
let nombre = document.getElementById("nombre");
let fondo = document.querySelectorAll(".fondo");
let  imgPortada = document.querySelector("#imgPortada");

 console.log(fondo)
console.log(cheks.length);

for (let i =0 ; i < cheks.length; i++){
    cheks[i].onclick = (e) => {
        let elemento = e.target;
        nombre.innerHTML = elemento.id;
        let color =  elemento.getAttribute("color");
        let imagen =  `img/${elemento.getAttribute("id").toLowerCase()}.png`;
        imgPortada.setAttribute("src" , imagen);
        console.log(color)
        for ( let j = 0; j < fondo.length ; j++){
            fondo[j].style.backgroundColor = color; 
        }

    }
}