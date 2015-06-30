

+function ($) { "use strict";

  $(function(){

  // datatable
  $('[data-ride="benchmarking"]').each(function() {
if (gon.language=="es") {
    var oTable = $(this).dataTable( {
      "aaSorting": [[ 1, "desc" ]], 
      "oLanguage": {
    "sProcessing":   "Procesando...",
    "sLengthMenu":   "Mostrar en bloques de _MENU_ registros",
    "sZeroRecords":  "No se encontraron resultados",
    "sInfo":         "Mostrando desde _START_ hasta _END_ de _TOTAL_ registros",
    "sInfoEmpty":    "Mostrando desde 0 hasta 0 de 0 registros",
    "sInfoFiltered": "(filtrado de _MAX_ registros en total)",
    "sInfoPostFix":  "",
    "sSearch":       "Buscar:",
    "sUrl":          "",
    "oPaginate": {
        "sFirst":    "Primero",
        "sPrevious": "Anterior",
        "sNext":     "Siguiente",
        "sLast":     "Último",
    }
},
      "bProcessing": true,
      // "sAjaxSource": "/irterminal2/js/datatables/datatable.json", //si se desea llamar json
      "sDom": "<'row'<'col-sm-6'l><'col-sm-6'f>r>t<'row'<'col-sm-6'i><'col-sm-6'p>>",
      "sPaginationType": "full_numbers",
      // "aoColumns": [
      //   { "mData": "enginerr" },
      //   { "mData": "browser" },
      //   { "mData": "platform" },
      //   { "mData": "version" },
      //   { "mData": "grade" }
      // ]
    } );
}
else
{
  var oTable = $(this).dataTable( {
      "aaSorting": [[ 1, "desc" ]], 
      "bProcessing": true,
      // "sAjaxSource": "/irterminal2/js/datatables/datatable.json", //si se desea llamar json
      "sDom": "<'row'<'col-sm-6'l><'col-sm-6'f>r>t<'row'<'col-sm-6'i><'col-sm-6'p>>",
      "sPaginationType": "full_numbers",
      // "aoColumns": [
      //   { "mData": "enginerr" },
      //   { "mData": "browser" },
      //   { "mData": "platform" },
      //   { "mData": "version" },
      //   { "mData": "grade" }
      // ]
    } ); 
};

  });

  




  });
}(window.jQuery);
