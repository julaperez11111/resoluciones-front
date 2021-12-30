let request = {
  nombres: "",
  nacionalidad: "",
  numUnico: "",
  tipoID: "",
  numID: "",
  fecha: "",
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
const submit = document.getElementById("submit");

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
  state = { loading: true, error: null };
  const body = {
    fileType: "portada",
    data: request,
  };
  try {
    console.log(state)
    const res = await fetch("http://localhost:3000/api", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    state = { loading: false, error: null };
    console.log(data);
  } catch (error) {
    console.log(error)
    state = { loading: false, error };
  }
};

submit.onclick = (e) => {
  e.preventDefault();
  console.log("No")
  postData(request);
};

function onClickTest() {
  console.log("Si")
}
