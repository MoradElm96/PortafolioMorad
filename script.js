let menuVisible = false;
// funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    } else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    //ocultar el menu una vez seleccionada una opcion
    document.getElementById("nav").classList="";
    menuVisible = false;

}

//funcion que aplica animaciones de las skills
function efectoSkill(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("java");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("microsoft");
        habilidades[3].classList.add("adobe");
    }
}

//detecto el scrolling para aplicar la animacion de la barra de skills
window.onscroll = function(){
    efectoSkill();
} 