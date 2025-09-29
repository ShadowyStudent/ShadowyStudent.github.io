document.addEventListener("DOMContentLoaded", () => {
  const mensaje = document.getElementById("mensaje-dinamico");
  const fecha = new Date().toLocaleDateString("es-MX", {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const frasesOscuras = [
    "Las sombras susurran… ¿estás listo para leer?",
    "No todos los libros quieren ser abiertos.",
    "Cada historia tiene un precio… ¿estás dispuesto a pagarlo?",
    "Hoy es un buen día para invocar palabras prohibidas."
  ];

  const frase = frasesOscuras[Math.floor(Math.random() * frasesOscuras.length)];
  mensaje.textContent = `${frase} Hoy es ${fecha}.`;
});

document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.getElementById("terminos");
  const boton = document.getElementById("btn-enviar");
  const formulario = document.getElementById("form-registro");

  if (checkbox && boton && formulario) {
    checkbox.addEventListener("change", () => {
      boton.disabled = !checkbox.checked;
      boton.classList.toggle("enabled", checkbox.checked);
    });

    formulario.addEventListener("submit", (e) => {
      const campos = ["nombre", "email", "password", "fecha", "telefono"];
      let incompleto = campos.some(id => {
        const campo = document.getElementById(id);
        return !campo.value.trim();
      });

      if (incompleto || !checkbox.checked) {
        e.preventDefault();
        alert("Debes completar todos los campos y aceptar los términos.");
      }
    });
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const btnVerMas = document.getElementById("btn-vermas");
  const info = document.getElementById("info-adicional");

  if (btnVerMas && info) {
    btnVerMas.addEventListener("click", () => {
      const visible = info.style.display === "block";
      info.style.display = visible ? "none" : "block";
      btnVerMas.textContent = visible ? "Ver más" : "Ocultar";
    });
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".btn-agregar");
  const contador = document.getElementById("contador");
  let cantidad = 0;

  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      cantidad++;
      contador.textContent = cantidad;
      alert("El libro ha sido invocado al carrito.");
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const cantidades = document.querySelectorAll(".cantidad");
  const precios = document.querySelectorAll(".precio");
  const subtotales = document.querySelectorAll(".subtotal");
  const totalSpan = document.getElementById("total");
  const btnPagar = document.getElementById("btn-pagar");

  function calcularTotal() {
    let total = 0;
    cantidades.forEach((input, i) => {
      const cantidad = parseInt(input.value) || 0;
      const precio = parseInt(precios[i].textContent) || 0;
      const subtotal = cantidad * precio;
      subtotales[i].textContent = subtotal;
      total += subtotal;
    });
    totalSpan.textContent = total;
  }

  cantidades.forEach(input => {
    input.addEventListener("input", calcularTotal);
  });

  btnPagar.addEventListener("click", () => {
    alert("La transacción ha sido rechazada por las fuerzas que custodian el Umbral.");
  });

  calcularTotal();
});


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-busqueda");
  const campo = document.getElementById("campo-busqueda");
  const resultados = document.getElementById("resultados");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const termino = campo.value.trim();
    if (termino === "") return;

    resultados.innerHTML = `
      <h2>Resultados para la búsqueda de "${termino}"</h2>
      <ul>
        <li>El códice del abismo — $199 MXN</li>
        <li>Fragmentos de la Realidad Rota — $189 MXN</li>
        <li>Tratado sobre la Ausencia — $199 MXN</li>
        <li>Los Cantos del Vacío — $219 MXN</li>
      </ul>
    `;
  });
});
