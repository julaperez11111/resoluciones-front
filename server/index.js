const express = require("express");
const { exec } = require("child_process");
const { getTemplateFile } = require("./utils/getTemplateFile");
const { parseData } = require("./utils/parseData")

const app = express();
const rpaResolucionesFolder = "../rpa_resoluciones";

const crearResoluciones = async (req, res) => {
  console.log("Procesando resoluciones");
  const templateFile = getTemplateFile(req.body.fileType);
  const data = parseData(JSON.stringify(req.body.data));
  console.log(data);
  console.log(templateFile);
  const scriptExec = new Promise((resolve, reject) => {
    // con la request vamos a ejecutar el python
    exec(
      `python ${rpaResolucionesFolder}/main.py --template-file ${templateFile} --data "${data}"`,
      (err, stdout, stderr) => {
        if (err) {
          console.log(err);
          resolve({
            message: "Algo fallo",
          });
        }
        resolve({ response: "He terminado" });
      }
    );
  });
  const response = await scriptExec
  return res.json(response)
};

app.use(express.json());
app.use(express.static("public"));
app.post("/api", crearResoluciones);

app.listen(3000, () => {
  console.log("listening in the port 3000");
});
