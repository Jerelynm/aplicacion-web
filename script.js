window.onload = function () {
  alert("Estas ingresando a la aplicación");
  actualizarHora();
  setInterval(actualizarHora, 1000);
};

function cambiarColor() {
  const botones = document.querySelectorAll("button");
  botones.forEach((btn) => {
    btn.style.background =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
  });
}

function toggleTema() {
  document.body.classList.toggle("claro");
}

f// Mostrar la fecha actual
function mostrarFecha() {
  const hoy = new Date();
  alert("Hoy es: " + hoy.toLocaleDateString());
}

// Aumentar o disminuir texto
function ajustarTexto(accion) {
  const body = document.body;
  let tamañoActual = parseFloat(window.getComputedStyle(body).fontSize);

  if (accion === "aumentar") {
    body.style.fontSize = (tamañoActual + 2) + "px";
  } else if (accion === "disminuir") {
    body.style.fontSize = (tamañoActual - 2) + "px";
  }
}

// Ocultar/mostrar el contenido principal
function toggleContenido() {
  const secciones = document.querySelectorAll("main section");

  secciones.forEach((sec) => {
    if (sec.style.display === "none") {
      sec.style.display = "block";
    } else {
      sec.style.display = "none";
    }
  });
}
function mensajes() {
  const mensajes = [
    "¡Eres increíble!",
    "Recuerda tomar agua",
    "¡Sigue adelante, lo estás haciendo genial!",
    "¡Cada día es una nueva oportunidad!",
    "¡Cree en ti mismo y todo será posible!",
    "¡La perseverancia es la clave del éxito!",
    "¡Sonríe, la vida es bella!",
  ];
  alert(mensajes[Math.floor(Math.random() * mensajes.length)]);
}

function toggleMusica() {
  const audio = document.getElementById("configuration-sound");

  if (audio.paused) {
    audio.play().catch(error => {
      alert("Error al reproducir música: " + error);
    });
  } else {
    audio.pause();
  }
}

function agregarTarea() {
  const input = document.getElementById("nuevaTarea");
  const lista = document.getElementById("listaTareas");

  if (input.value.trim() === "") {
    alert("Escribe una tarea antes de agregar.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = input.value + " ";

  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar";
  btnEliminar.style.marginLeft = "10px";
  btnEliminar.onclick = function () {
    lista.removeChild(li);
  };

  li.appendChild(btnEliminar);
  lista.appendChild(li);
  input.value = "";
}

function mostrarTexto() {
  const texto = document.getElementById("entradaTexto").value;
  const salida = document.getElementById("textoMostrado");
  salida.textContent = texto ? texto : "No escribiste nada.";
}

function aplicarEstilo() {
  const salida = document.getElementById("textoMostrado");
  salida.style.color = "yellow";
  salida.style.fontSize = "22px";
  salida.style.fontWeight = "bold";
}

function eliminarEstilo() {
  const salida = document.getElementById("textoMostrado");
  salida.removeAttribute("style");
}

function cambiarFondo() {
  try {
    const colores = ["#ff9999", "#99ff99", "#9999ff", "#ffff99"];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    if (!document.body) throw "No se encontró el body";
    document.body.style.backgroundColor = colorAleatorio;
  } catch (error) {
    alert("Error al cambiar el fondo: " + error);
  }
}

function restaurarFondo() {
  document.body.style.backgroundColor = "#1e1e1e";
}

function mostrarFrase() {
  const frases = [
    "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    "Nunca es tarde para ser lo que podrías haber sido.",
    "El conocimiento es poder.",
    "Aprender nunca agota la mente. – Leonardo da Vinci",
  ];

  const texto = document.getElementById("fraseTexto");
  texto.textContent = frases[Math.floor(Math.random() * frases.length)];
}

function borrarFrase() {
  document.getElementById("fraseTexto").textContent = "";
}

function actualizarHora() {
  const ahora = new Date();
  document.getElementById("horaLocal").textContent =
    "Hora local: " + ahora.toLocaleTimeString();

  const opciones = { timeZone: "Europe/Vatican" };
  const horaVaticano = new Date(
    ahora.toLocaleString("en-US", opciones)
  );
  document.getElementById("horaVaticano").textContent =
    "Hora en El Vaticano: " + horaVaticano.toLocaleTimeString();

  const diffMs = horaVaticano - ahora;
  const diffHrs = diffMs / (1000 * 60 * 60);
  document.getElementById("diferencia").textContent =
    "Diferencia horaria: " + diffHrs.toFixed(1) + " horas";
}