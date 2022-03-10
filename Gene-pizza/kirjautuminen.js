document.addEventListener("DOMContentLoaded", aloitus);
function aloitus(){
    if (localStorage.getItem("kirjautunut")==="kylla"){
        document.getElementById("kirjaudu_ulos");
    } 
    else {
        document.getElementById("kirjaudu_ulos"). style.display ="none";
    }
}

function registeroidy(){
    localStorage.setItem("Nimi",document.getElementById("nimi").value);
    localStorage.setItem("salasana",document.getElementById("salasana").value);
    localStorage.setItem("kirjautunut", "kylla");
}
function uloskirjaus(){
    localStorage.clear();
}
