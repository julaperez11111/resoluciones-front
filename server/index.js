const express = require('express')

const app = express()

const crearResoluciones = (req, res) => {
    console.log("req.body")
    console.log(req.body)
    // con la request vamos a ejecutar el python
    res.json({ response: "He terminado" })
}

app.use(express.json());
app.use(express.static('public'));
app.post('/api', crearResoluciones);

app.listen(3000, () => {
    console.log("listening in the port 3000")
})