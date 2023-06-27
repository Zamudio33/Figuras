function circulo(){
    let figura=document.getElementById("figura");
    /*figura.classList.add("circulo"); /*agrega clases al elemento*/
    figura.classList.toggle("circulo") /*agrega y quita la clase con cada click*/
}

function rectangulo(){
    let figura=document.getElementById("figura");
    /*figura.classList.add("circulo"); /*agrega clases al elemento*/
    figura.classList.toggle("rectangulo") /*agrega y quita la clase con cada click*/
}

function Degradado(){
    let figura=document.getElementById("figura");
    /*figura.classList.add("circulo"); /*agrega clases al elemento*/
    figura.classList.toggle("Degradado") /*agrega y quita la clase con cada click*/
}

function Gif(){
    let figura=document.getElementById("figura");
    /*figura.classList.add("circulo"); /*agrega clases al elemento*/
    figura.classList.toggle("Gif") /*agrega y quita la clase con cada click*/
}

function mTop(){
    let figura=document.getElementById("figura");
    /*figura.classList.add("circulo"); /*agrega clases al elemento*/
    figura.classList.toggle("mTop") /*agrega y quita la clase con cada click*/
}

function mDow(){
    let figura=document.getElementById("figura");
    /*figura.classList.add("circulo"); /*agrega clases al elemento*/
    figura.classList.toggle("mDow") /*agrega y quita la clase con cada click*/

}

function izquierda(){
    let figura=document.getElementById("figura");

    figura.classList.toggle("izquierda")
}

function derecha(){
    let figura=document.getElementById("figura");

    figura.classList.toggle("derecha")
}

function diagonal(){
    const figura=document.getElementById("figura");

    figura.classList.toggle("diagonal")
}

function animation(){
    const figura=document.querySelector("#figura");
    /*figura.classList.add("circulo"); /*agrega clases al elemento*/
    figura.classList.toggle("animation") /*agrega y quita la clase con cada click*/

}

function panel(){
    const panel=document.querySelector(".panel");

    panel.classList.toggle("active")
}

function modal(){
    const modal=document.querySelector("#modal");
    modal.classList.toggle("active")
}