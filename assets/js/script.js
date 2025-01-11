// Función para cambiar el color de fondo de "ele1" a amarillo al hacer clic
document.addEventListener("DOMContentLoaded", function() {
  
    // 1. Funcionalidad para pintar el div con id "ele1" al hacer clic
    const ele = document.getElementById('ele1');
    if (ele) {
      ele.addEventListener('click', function() {
        ele.style.backgroundColor = 'yellow';  // Cambia a amarillo
      });
    }
  
    // 2. Funcionalidad para cambiar el color de fondo de los divs con la clase "color-div" al hacer clic
    const divs = document.querySelectorAll('.color-div');
    divs.forEach(div => {
      div.addEventListener('click', function() {
        div.style.backgroundColor = 'black';  // Cambia a negro
      });
    });
  
    // 3. Funcionalidad para cambiar el color de todos los divs con la clase "color-div"
    //    al presionar las teclas 'a', 's', 'd', etc.
    let color = '';  // Variable para guardar el color seleccionado
  
    document.addEventListener('keydown', function(event) {
      if (event.key === 'a') {
        color = 'pink';  // Si presionas 'a', cambia a rosado
      } else if (event.key === 's') {
        color = 'orange';  // Si presionas 's', cambia a naranja
      } else if (event.key === 'd') {
        color = 'lightblue';  // Si presionas 'd', cambia a celeste
      } else if (event.key === 'q') {
        color = 'purple';  // Si presionas 'q', cambia a morado
      } else if (event.key === 'w') {
        color = 'gray';  // Si presionas 'w', cambia a gris
      } else if (event.key === 'e') {
        color = 'brown';  // Si presionas 'e', cambia a café
      }
  
      // Cambiar el color de todos los divs con la clase "color-div"
      divs.forEach(div => {
        div.style.backgroundColor = color;
      });
    });
  });
  