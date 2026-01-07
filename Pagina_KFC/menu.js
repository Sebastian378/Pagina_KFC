//Logica de archivo menu.html
const cambioIdioma = document.getElementById('cambio-idioma')
const cambioTema = document.getElementById('cambio-tema')

cambioTema.addEventListener('change', function () {
  const valorElegido = cambioTema.value;
  if (valorElegido === "2") {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
});

const traduccion = {
  "1": {
    "title-hamburguesa1": "BBQ Crunch Sandwich",
    "parrafo1": "1 Sándwich BBQ Crunch  (1 fillet of chicken)",
    "btn-compras": "Buy",
    "title-hamburguesa2": "Kentucky Sandwich",
    "parrafo2": "1 Kentucky burger/sandwich(1 Chicken breast steakunwrapped, pickles,...",
    "title-hamburguesa3": "Combo BBQ Crunch",
    "parrafo3": "1 BBQ Crunch sandwich (1 chicken fillet) + 1 small potato + 1 PET gas",
    "title-hamburguesa4": "Kentucky Coronel Sandwich",
    "parrafo4": "1 Kentucky Colonel burger / sandwich (1 breast steak from pickled chicken, Salad...)",
    "title-hamburguesa5": "Combo Kentucky Sandwich",
    "parrafo5": "1 Kentucky burger / sandwich (1 chicken breast steak unwrapped, pickles,...)",
    "title-hamburguesa6": "Combo Kentucky Coronel Sandwich",
    "parrafo6": "1 Kentucky Coronel hamburguesa/sandwich (1 Filete de pechuga de pollo...)",
    "title-hamburguesa7": "Sandwich Crispy BBQ",
    "parrafo7": "1 Crispy BBQ Sandwich (1 extra large, triple breaded, onion crisp...)",
    "title-hamburguesa8": "Combo Sandwich Crispy BBQ",
    "parrafo8": "1 Crispy BBQ Sandwich (1 extra large, triple breaded, onion, crisp. )",
  },
  "2": {
    "title-hamburguesa1": "BBQ Crunch Sandwich",
    "parrafo1": "1 Sandwich BBQ Crunch (1 Filete de pollo apanado)",
    "btn-compras": "Comprar",
    "title-hamburguesa2": "Kentucky Sandwich",
    "parrafo2": "1 Kentucky hamburguesa/ sandwich(1 Filete de pechuga de pollo apanado, pepinillos,...)",
    "title-hamburguesa3": "Combo BBQ Crunch",
    "parrafo3": "1 Sandwich BBQ Crunch (1 Filete de pollo apanado) + 1 Papa pequeña + 1 Gaseosa PET",
    "title-hamburguesa4": "Kentucky Coronel Sandwich",
    "parrafo4": "1 Kentucky Coronel hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, Ensalada...)",
    "title-hamburguesa5": "Combo Kentucky Sandwich",
    "parrafo5": "1 Kentucky hamburguesa / Sandwich (1 Filete de pechuga de polloapanado, pepinillos,...)",
    "title-hamburguesa6": "Combo Kentucky Coronel Sandwich",
    "parrafo6": "1 Kentucky Coronel hamburguesa/sandwich (1 Filete de pechuga de pollo...)",
    "title-hamburguesa7": "Sandwich Crispy BBQ",
    "parrafo7": "1 Sandwich Crispy BBQ (1 Filete de pechuga extra grande, triple empanizado, cebolla crisp...)",
    "title-hamburguesa8": "Combo Sandwich Crispy BBQ",
    "parrafo8": "1 Sandwich Crispy BBQ (1 Filete de pechuga extra grande, triple empanizado, cebolla, crisp..)",
  }
}

const selectorIdioma = document.getElementById('cambio-idioma');
selectorIdioma.addEventListener('change', function () {
  const idiomaElegido = selectorIdioma.value;
  const etiquetas = document.querySelectorAll('[data-key]');
  etiquetas.forEach(function (elemento) {
    const llave = elemento.getAttribute('data-key');
    if (traduccion[idiomaElegido] && traduccion[idiomaElegido][llave]) {
      elemento.innerText = traduccion[idiomaElegido][llave];
    }
  })
})

