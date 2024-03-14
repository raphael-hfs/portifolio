//Menu mobile
const btnBurgerMenu = document.querySelector("#btn-burger-menu");
const burgerMenu = document.querySelector(".burger-menu");

btnBurgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
});

//Redirecionamento de páginas
function technologiesPageRedirect() {
    window.location.assign("pages/tecnologias.html");
}

function aboutPageRedirect() {
    window.location.assign("pages/sobre.html");
}

function gitHubRedirect() {
    window.location.assign("https://github.com/raphael-hfs");
}

function youTubeRedirect() {
    window.location.assign("https://www.youtube.com/channel/UC-loiBT5NG7bNdv8NgV1Kzw");
}

function linkedInRedirect() {
    window.location.assign("https://www.linkedin.com/in/raphael-henrique-fran%C3%A7oso-silva-630827296/");
}

