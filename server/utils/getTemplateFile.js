/** Funcion para obtener la direccion del template file
 * 
 * @param string key: se usa para definir que template se va a usar al procesar el archivo
 */
const getTemplateFile = (key) => {
    if (key == "portada") {
        return "C:\\Users\\EMIMED\\desarrollo\\rpa_resoluciones\\templates\\portada\\archivo.docx"
    }
    return null
}

module.exports = {
    getTemplateFile
}