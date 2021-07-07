document.querySelector("#svg-menu").addEventListener("click", () => {
    document.querySelector(".full-menu").classList.toggle("show-menu");
});

document.querySelector(".croix").addEventListener("click", () => {
    document.querySelector(".pub").style.display = "none";
    document.querySelector(".content-bandeau").style = "justify-content:center";
});