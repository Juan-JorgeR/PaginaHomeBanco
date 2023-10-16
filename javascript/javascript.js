function iniciar() {
    let menuDesplegableCuentas = document.getElementById("menuCuentas");
    let menuDesplegableInversiones = document.getElementById("menuInversiones");
    let menuDesplegableTarjetas = document.getElementById("menuTarjetas");
    let menuDesplegableSeguros = document.getElementById("menuSeguros");

    document.querySelectorAll('nav ul li a').forEach(opcionNav => {
        opcionNav.addEventListener("click", e => {
            if (e.target.getAttribute("id") == "cuentasOpcionNav") {
                if(menuDesplegableCuentas.style.visibility == "hidden") {
                    menuDesplegableCuentas.style.visibility = "visible";
                }
                else {
                    menuDesplegableCuentas.style.visibility = "hidden";
                }
                menuDesplegableInversiones.style.visibility = "hidden";
                menuDesplegableTarjetas.style.visibility = "hidden";
                menuDesplegableSeguros.style.visibility ="hidden";
            }  
            else if (e.target.getAttribute("id") == "inversionesOpcionNav") {
                if(menuDesplegableInversiones.style.visibility == "hidden") {
                    menuDesplegableInversiones.style.visibility = "visible";
                }
                else {
                    menuDesplegableInversiones.style.visibility = "hidden";
                }
                menuDesplegableCuentas.style.visibility = "hidden";
                menuDesplegableTarjetas.style.visibility = "hidden";
                menuDesplegableSeguros.style.visibility ="hidden";
            }
            else if (e.target.getAttribute("id") == "tarjetasOpcionNav") {
                if(menuDesplegableTarjetas.style.visibility == "hidden") {
                    menuDesplegableTarjetas.style.visibility = "visible";
                }
                else {
                    menuDesplegableTarjetas.style.visibility = "hidden";
                }
                menuDesplegableCuentas.style.visibility = "hidden";
                menuDesplegableInversiones.style.visibility = "hidden";
                menuDesplegableSeguros.style.visibility ="hidden";
            }
            else if (e.target.getAttribute("id") == "segurosOpcionNav") {
                if(menuDesplegableSeguros.style.visibility == "hidden") {
                    menuDesplegableSeguros.style.visibility ="visible";
                }
                else {
                    menuDesplegableSeguros.style.visibility ="hidden";
                }
                menuDesplegableCuentas.style.visibility = "hidden";
                menuDesplegableInversiones.style.visibility = "hidden";
                menuDesplegableTarjetas.style.visibility = "hidden";
            }
        });
        
    });
}
window.addEventListener("load", iniciar, false);
