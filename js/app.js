document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);

// Llamado a Ajax e imprimir resultados
function cargarNombres(e){
  e.preventDefault();
  
  // Leer las variables
  const origen = document.getElementById('origen');
  const origenSeleccionado = origen.options[origen.selectedIndex].value;

  const genero = document.getElementById('genero');
  const generoSeleccionado = genero.options[genero.selectedIndex].value;

  const cantidad = document.getElementById('numero').value;

  let url = '';
  url += 'https://uinames.com/api/?';

  // Si hay origen agregarlo a la url
  if(origenSeleccionado !== ''){
    url += `region=${origenSeleccionado}&`
  }

  // Si hay genero agregarlo a la url
  if(generoSeleccionado !== ''){
    url += `gender=${generoSeleccionado}&`
  }

  // Si hay cantidad agregarlo a la url
  if(cantidad !== ''){
    url += `amount=${cantidad}&`
  }

  console.log(url);

  // Conectar con AJAX
  // Iniciar XMLHTTPRequest
  const xhr = new XMLHttpRequest();
  // Abrimos la conexion
  xhr.open('GET', url);
  // Datos e impresion del template
  xhr.onload = function(){
    if(this.status === 200){
      const nombres = JSON.parse(this.responseText);
      // Generar el HTML
      let htmlNombres = '<h2>Nombres generados</h2>';

      htmlNombres += '<ul class="lista">';

      // Imprimir cada nombre
      nombres.forEach(function(nombre){
        htmlNombres += `<li>${nombre.name}</li>`;
      });

      htmlNombres += '</ul>';
    }
  }
  // Enviar el request
  xhr.send();


}