// ---------------------------------------------inicio codigo para ocultar menu hamburguesa mobile y cambio de icono  ---------------------------------------------------

const $menuIconMobile = document.querySelector("#menu-icon-mobile");
const $containerButtonsMenu = document.querySelector("#container-menu-buttons");

const menuIconSrc = "./assets/svg/menu.svg";  // Ícono de menú hamburguesa
const closeIconSrc = "./assets/svg/menu-close.svg"; // Ícono de cerrar

$menuIconMobile.addEventListener("click", () => {
    $containerButtonsMenu.classList.toggle("hidden");

    if ($containerButtonsMenu.classList.contains("hidden")) {
        $menuIconMobile.src = menuIconSrc;  // Muestra el icono de menú
    } else {
        $menuIconMobile.src = closeIconSrc; // Muestra el icono de cerrar
    }
})

// ---------------------------------------------inicio codigo para intercambio de componentes  ---------------------------------------------------


// seleccion de botones
const $balanceButton = document.querySelector("#balance-button");
const $categoriaButton = document.querySelector("#categoria-button");
const $reporteButton = document.querySelector("#reporte-button");
const $agregarOperacionButton = document.querySelector("#agregrar-operacion-componente-button")

// seleccion de componentes
const $balanceComponente = document.querySelector("#balance-componente");
const $agregarOperacionComponente = document.querySelector("#agregar-operacion-componente");
const $categoriaComponente = document.querySelector("#categoria-componente");
const $reporteComponente = document.querySelector("#reporte-componente");


//Boton balance
$balanceButton.addEventListener("click", () => {
    $balanceComponente.classList.remove("hidden");
    $balanceComponente.classList.add("flex"); // Asegura que se muestre correctamente

    $agregarOperacionComponente.classList.add("hidden");
    $categoriaComponente.classList.add("hidden");
    $reporteComponente.classList.add("hidden");
});

//Boton agregar operacion dentro del componente balance
$agregarOperacionButton.addEventListener("click", () => {
    $agregarOperacionComponente.classList.remove("hidden");
    $agregarOperacionComponente.classList.add("flex");

    $balanceComponente.classList.add("hidden");
    $categoriaComponente.classList.add("hidden");
    $reporteComponente.classList.add("hidden");

})

//Boton categoria
$categoriaButton.addEventListener("click", () => {
    $categoriaComponente.classList.remove("hidden");
    $balanceComponente.classList.add("flex"); // Asegura que se muestre correctamente

    $agregarOperacionComponente.classList.add("hidden");
    $balanceComponente.classList.add("hidden");
    $reporteComponente.classList.add("hidden");
});

//Botonreporte
$reporteButton.addEventListener("click", () => {
    $reporteComponente.classList.remove("hidden");
    $reporteComponente.classList.add("flex");

    $agregarOperacionComponente.classList.add("hidden");
    $balanceComponente.classList.add("hidden");
    $categoriaComponente.classList.add("hidden");
})


// ---------------------------------------------inicio codigo para intercambio de componentes  ---------------------------------------------------
