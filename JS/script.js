const BOTON = document.getElementById("calcular");
const BTN_CLEAR = document.getElementById("clear");
const ERROR = document.getElementById("error");
const VOL = document.getElementById("vol");
const FLU = document.getElementById("flu");
const MAN = document.getElementById("man");

BOTON.addEventListener('click', calcular);


// limpia los resultados y el input
BTN_CLEAR.addEventListener('click', () => {
    const PESO = document.getElementById("peso");
    PESO.value = null;
    ERROR.style.display = "none"
    VOL.style.display = "none";
    FLU.style.display = "none";
    MAN.style.display = "none";
    BTN_CLEAR.style.display = "none"
});


function calcular() {
    console.log("click en el boton");
    const PESO = document.getElementById("peso").value;
    let vol;
    let mantenimiento;

    if (PESO <= 0 || PESO > 600) {
        console.log("ingrese un peso válido");
        ERROR.innerHTML = "Ingrese un peso válido!"
        ERROR.style.display = "block";
        BTN_CLEAR.style.display = "inline"

        VOL.style.display = "none";
        FLU.style.display = "none";
        MAN.style.display = "none";

    } else {
        ERROR.style.display = "none"
        if (PESO <= 30) {
            console.log("el peso es: " + PESO);
            vol = holliday(PESO);
            VOL.innerHTML = vol + " cc";
            VOL.style.display = "block";

        } else {
            vol = superficie(PESO);
            VOL.innerHTML = vol + " cc";
            VOL.style.display = "block";

        }
        mantenimiento = Math.round(vol / 24);
        FLU.innerHTML = mantenimiento + " cc/h";
        FLU.style.display = "block";
        MAN.innerHTML = Math.floor(mantenimiento * 1.5) + " cc/h";
        MAN.style.display = "block";
        BTN_CLEAR.style.display = "inline"
    }
}

function holliday(valor) {
    console.log("holliday");

    if (valor <= 10) {
        dosis = valor * 100;
    } else if (valor > 10 && valor <= 20) {
        dosis = (valor - 10) * 50 + 1000;
    } else {
        dosis = (valor - 20) * 20 + 1500;
    }
    return dosis;
}

function superficie(valor) {
    let opcion;
    let opcion1;
    let opcion2;
    let selected = false;

    console.log("superficie");
    dosis = (((valor * 4) + 7) / (valor + 90));
    console.log(dosis);
    opcion1 = Math.round(dosis * 1500);
    opcion2 = Math.round(dosis * 2000);

    // se realiza un bucle hasta que el usuario seleccione una opción
    while (!selected) {
        alert("Selecione la opción 1 o 2:");
        opcion = parseInt(prompt(`Opción 1: ${dosis.toFixed(2)} * 1500 = ${opcion1} cc | Opción 2: ${dosis.toFixed(2)} * 2000 = ${opcion2} cc `));
        if (opcion === 1) {
            console.log("seleccione la primera opción");
            dosis = opcion1;
            selected = true;
        } else if (opcion === 2) {
            console.log("seleccione la segunda opción");
            dosis = opcion2;
            selected = true;
        }
        else {
            alert("Opción no válida!!");
        }

    }

    return dosis;
}