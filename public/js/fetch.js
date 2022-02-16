const defaultRequest = {
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

let request = Object.assign(defaultRequest);

let state = {
  loading: false,
  error: null,
};

const mainContainer = document.getElementById("main-container");

const spinner = document.getElementById("spinner");

const modal = document.getElementById("modal");

// Este es el botón imprimir
const submit = document.getElementById("submit");

const actionButton = document.getElementById("action-button");

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
  toggleSpinner(true);
  const body = request;
  console.log(body);
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
    toggleSpinner(false);
    toggleModal({ typeMessage: "success" });
  } catch (error) {
    console.log(error);
    state = { loading: false, error };
    toggleSpinner(false);
    toggleModal({ typeMessage: "failure", message: error.message });
  }
};

submit.addEventListener(
  "click",
  (e) => {
    e.preventDefault();
    postData(request);
  },
  false
);

const toggleSpinner = (loading) => {
  if (loading) {
    mainContainer.classList.add("opaque");
    spinner.classList.remove("hidden");
    spinner.classList.add("visible");
  } else {
    mainContainer.classList.remove("opaque");
    spinner.classList.remove("visible");
    spinner.classList.add("hidden");
  }
};

const toggleModal = (options = {}) => {
  if (options.typeMessage === "success") {
    document.getElementById("modal-title").innerHTML = "Se creo exitosamente";
    document.getElementById("modal-description").innerHTML =
      "Se generó los archivos correctamente, por favor verifique la carpeta de outputs";
    document.querySelector(".modal-title").classList.add("modal__success")
    document.getElementById("action-button").classList.add("modal__success")
    mainContainer.classList.add("opaque");
    modal.classList.remove("hidden");
    modal.classList.add("visible");
    return;
  } else if (options.typeMessage == "failure") {
    document.getElementById("modal-title").innerHTML = "Ocurrió un error";
    document.getElementById("modal-description").innerHTML = options.message;
    document.querySelector(".modal-title").classList.add("modal__failure")
    document.getElementById("action-button").classList.add("modal__failure")
    mainContainer.classList.add("opaque");
    modal.classList.remove("hidden");
    modal.classList.add("visible");
    return;
  }
  mainContainer.classList.remove("opaque");
  modal.classList.remove("visible");
  modal.classList.add("hidden");
  cleanForm();
};

const cleanForm = () => {
  request = Object.assign(defaultRequest);
  document.querySelectorAll("input").forEach((item) => {
    if (!["submit", "clean-button"].includes(item.id)) {
      item.value = "";
    }
  });
  valorMulta.value = "Seleccione valor Multa a Aplicar";
  tipoID.value = "Seleccione el Tipo de ID";
};

actionButton.addEventListener(
  "click",
  (e) => {
    e.preventDefault();
    toggleModal();
  },
  false
);
