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
};

let state = {
  loading: false,
  error: null,
};

const mainContainer = document.getElementById("main-container")

const spinner = document.getElementById("spinner")

// Este es el botón imprimir
const submit = document.getElementById("submit");

// Este es el select
const valorMulta = document.getElementById("valorMulta");

// Este es el select de tipo de identificacion
const tipoID = document.getElementById("tipoID");

valorMulta.addEventListener("change", (e) => {
  request.valorMulta = e.target.value;
});

tipoID.addEventListener("change", (e) => {
  request.tipoID = e.target.value;
});
// estos son los inputs
document.querySelectorAll("input").forEach((item) => {
  const updateValue = (e) => {
    request[item.name] = e.target.value;
    // console.log(request)
  };
  item.addEventListener("input", updateValue);
});

const postData = async (request) => {
  toggleSpinner(true)
  const body = request;
  console.log(body)
  try {
    const res = await fetch("http://localhost:3000/api", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    state = { loading: false, error: null };
    toggleSpinner(false)
    console.log(data);
  } catch (error) {
    console.log(error);
    state = { loading: false, error };
    toggleSpinner(false)
  }
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  postData(request);
}, false);

const toggleSpinner = (loading) => {
  if (loading) {
    mainContainer.classList.add("opaque")
    spinner.classList.remove("hidden");
    spinner.classList.add("visible")
  }
  else {
    mainContainer.classList.remove("opaque")
    spinner.classList.remove("visible");
    spinner.classList.add("hidden")
  }
}