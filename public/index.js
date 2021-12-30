const container = document.getElementById("app");
if (state.loading) {
  container.innerHTML = `<div class="centered-container"><div class="spinner"></div></div>`;
} else {
  container.innerHTML = `
  <div class="contenedor">
        <div class="datos">
          <form action="#" method="POST">
            <table cellspacing="7">
              <thead>
                <h1>INGRESO IRREGULAR</h1>
              </thead>
              <!--align="center" dentro de h1-->
              <br /><br />
              <tbody>
                <!--align="center"-->
                <tr>
                  <th>Fecha</th>
                  <th>Número único</th>
                </tr>
                <tr>
                  <td><input type="date" name="fecha" /></td>
                  <td>
                    <input
                      type="number"
                      name="numUnico"
                      placeholder="Historial Extranjero"
                    />
                  </td>
                </tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
  
                <tr>
                  <th colspan="2">Nombre Completo</th>
                  <!--<th>Apellidos</th> -->
                </tr>
                <tr>
                  <td colspan="2">
                    <input
                      type="text"
                      name="nombres"
                      placeholder="Nombres y apellidos"
                      size="40"
                    />
                  </td>
                  <!-- <td><input type="text" placeholder="Surnames" size="31"></td> -->
                </tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
  
                <tr>
                  <th>Tipo Documento</th>
                  <th># Documento</th>
                </tr>
                <tr>
                  <td>
                    <select name="tipoID" id="">
                      <option disabled selected>Seleccione el Tipo de ID</option>
                      <option value="Cédula de Ciudadania">CC</option>
                      <option value="Documento Nacional de Identificacion">
                        DNI
                      </option>
                      <option value="Pasaporte">Pass</option>
                      <!--<option value="Estadounidense">Estadounidense</option>
                                      <option value="Español">Español</option> -->
                    </select>
                  </td>
                  <td>
                    <input type="text" name="numID" placeholder="Document #" />
                  </td>
                </tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
  
                <tr>
                  <th colspan="2">Nacionalidad</th>
                </tr>
                <tr>
                  <td colspan="2">
                    <input type="text" name="nacionalidad" size="25" />
                  </td>
                </tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
  
                <tr>
                  <th>Auto Apertura #</th>
                  <th>Auto Formulario #</th>
                </tr>
                <tr>
                  <td>
                    <input
                      type="number"
                      name="autoApertura"
                      placeholder="000000"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="autoFormulacion"
                      placeholder="000000"
                    />
                  </td>
                </tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
  
                <tr>
                  <th>Expediente #</th>
                  <th>Informe de Caso #</th>
                </tr>
                <tr>
                  <td>
                    <input type="number" name="expediente" placeholder="000000" />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="informeCaso"
                      placeholder="000000"
                    />
                  </td>
                </tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
  
                <tr>
                  <th>Resolución #</th>
                  <th>Fecha Resolución</th>
                </tr>
                <tr>
                  <td><input type="number" name="resolucion" /></td>
                  <td><input type="date" name="fechaResolucion" /></td>
                </tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
  
                <tr>
                  <th colspan="2">Multa a Aplicar</th>
                </tr>
                <tr>
                  <td colspan="2">
                    <!--align="center"-->
                    <select name="valorMulta" id="valorMulta">
                      <option disabled selected>
                        Seleccione valor Multa a Aplicar
                      </option>
                      <option
                        value="CUATROCIENTOS NOVENTA Y NUEVE MIL SEICIENTOS OCHENTA Y NUEVE PESOS $499.689"
                      >
                        1 a 30 días $499.689
                      </option>
                      <option
                        value="QUINIENTOS CUARENTA Y CINCO MIL CIENTO QUINCE PESOS $545.115"
                      >
                        31 a 60 días $545.115
                      </option>
                      <option
                        value="QUINIENTOS NOVENTA MIL QUINIENTOS CUARENTA Y UNO PESOS $590.541"
                      >
                        61 a 90 días $590.541
                      </option>
                      <option
                        value="SEISCIENTOS TREINTA Y CINCO MIL NOVECIENTOS SESENTA Y OCHO PESOS $635.968"
                      >
                        91 a 120 días $635.968
                      </option>
                      <option
                        value="SEISCIENTOS OCHENTA Y UN MIL TRESCIENTOS NOVENTA Y CUATRO PESOS $681.394"
                      >
                        Mayor a 121 días $681.394
                      </option>
                    </select>
                  </td>
                </tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
  
                <tr>
                  <th colspan="2">Observaciones</th>
                </tr>
                <tr>
                  <td colspan="2">
                    <!--align="center"-->
                    <textarea
                      name="mensaje"
                      id="mensaje"
                      placeholder="En este espacio puede escribir las observaciones u anotaciones adicionales en caso de ser necesarias."
                    ></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
            <br /><br />
            <div>
              <!-- align="center"-->
              <button
                class="submit-button"
                id="submit"
                type="button"
              >
                Enviar
              </button>
              <input
                class="reset-button"
                type="reset"
                value="Limpiar Formulario"
              />
            </div>
            <br /><br />
          </form>
        </div>
      </div>
  `;
}
