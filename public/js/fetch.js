let request = {
  fecha: "",
  nombres: "",
  pasaporte: "",
  nacionalidad: "",
  he: "",
  autoApertura: "",
  autoFormulacion: "",
  expediente: "",
  informeCaso: "",
  resolucion: "",
  fechaResolucion: "",
  valorMulta: "",
  mensaje: "",
};

// Este es el botón imprimir
const imprimir = document.getElementById("submit");

// Este es el textarea
const mensaje = document.getElementById("mensaje");

// Este es el select
const valorMulta = document.getElementById("valorMulta");

mensaje.addEventListener("input", (e) => {
  request.mensaje = e.target.value;
});

valorMulta.addEventListener("change", (e) => {
  request.valorMulta = e.target.value;
});

// estos son los inputs
document.querySelectorAll("input").forEach((item) => {
  const updateValue = (e) => {
    request[item.id] = e.target.value;
    // console.log(request)
  };
  item.addEventListener("input", updateValue);
});

const postData = async (request) => {
  const body = {
    fileType: "portada",
    data: request,
  };
  const res = await fetch("http://localhost:3000/api", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  // console.log(data);
};

imprimir.onclick = (e) => {
  e.preventDefault();
  postData(request);
};
