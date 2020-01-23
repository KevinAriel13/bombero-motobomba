$('agregar').click(function() {
    var nombre = document.getElementById("codigo").value;
  
    var i = 1; //contador para asignar id al boton que borrara la fila
    var fila = '<tr id="row' + i + '"><td>' + codigo+ '</td><td><button type="button" name="remove" id="' + i + '" class="btn btn-danger btn_remove">Quitar</button></td></tr>'; //esto seria lo que contendria la fila
  
    i++;
  
    $('#mytable tr:first').after(fila);
      $("#incrementados").text(""); //esta instruccion limpia el div adicioandos para que no se vayan acumulando
      var nFilas = $("#mytable tr").length;
      $("#incrementados").append(nFilas + 1);
      //le resto 1 para no contar la fila del header
      document.getElementById("codigo").value ="";
    });
  $(document).on('click', '.btn_remove', function() {
    var button_id = $(this).attr("id");
      //cuando da click obtenemos el id del boton
      $('#row' + button_id + '').remove(); //borra la fila
      //limpia el para que vuelva a contar las filas de la tabla
      $("#incrementados").text("");
      var nFilas = $("#mytable tr").length;
      $("#incrementados").append(nFilas - 1);
    });