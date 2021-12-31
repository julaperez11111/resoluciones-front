const express = require("express");
const { exec } = require("child_process");
const { getTemplateFile } = require("./utils/getTemplateFile");
const { parseData } = require("./utils/parseData");

const app = express();
const rpaResolucionesFolder = "../rpa_resoluciones";

const crearResoluciones = async (req, res) => {
  console.log("Procesando resoluciones");
  const data = parseData(JSON.stringify(req.body));
  console.log(data);
  const scriptExec = new Promise((resolve, reject) => {
    // con la request vamos a ejecutar el python
    exec(
      `python ${rpaResolucionesFolder}/main.py --data "${data}"`,
      (err, stdout, stderr) => {
        if (err) {
          console.log(err);
          return resolve({
            message: "Algo falló",
            error: err,
          });
        }
        resolve({ message: "Terminó exitosamente" });
      }
    );
  });
  const response = await scriptExec;
  return res.json(response);
};

app.use(express.json());
app.use(express.static("public"));
app.post("/api", crearResoluciones);

app.listen(3000, () => {
  console.log("listening in the port 3000");
});
