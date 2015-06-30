
jQuery(function($) {


$(document).ready(function() {




   if (locale=="es") {


    $('.datatableId').dataTable({

        "language": {
            "lengthMenu": "Mostrar en bloques de  _MENU_  registros",
            "zeroRecords": "No se he encontrado",
            "info": "Mostrando desde _PAGE_  hasta _PAGES_ de _PAGES_ registros ",
            "infoEmpty": "No hay registros disponibles",
            "infoFiltered": "(filtrado de _MAX_ registros en total)",
            "sSearch": "Buscar:",
            "oPaginate": {
                "sFirst":    "Primero",
                "sPrevious": "Anterior",
                "sNext":     "Siguiente",
                "sLast":     "Último"
            }
        }

        ,
            "pagingType": "full_numbers",
            "aaSorting": [[ 1, "desc" ]],
            "bSort": true
    });

    }


    else {

        $('.datatableId').dataTable({

            "pagingType": "full_numbers",
            "bSort": true,
            "aaSorting": [[ 1, "desc" ]]
        });


    }



} );



});