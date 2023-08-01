$(function () {
    $('#data').DataTable({
        language: {
            "sProcessing": "Procesando...",
            "sLengthMenu": "Mostrar _MENU_ registros",
            "sZeroRecords": "No se encontraron resultados",
            "sEmptyTable": "Ningún dato disponible en esta tabla =(",
            "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix": "",
            "sSearch": "Buscar:",
            "sUrl": "",
            "sInfoThousands": ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            },
            "buttons": {
                "copy": "Copiar",
                "colvis": "Visibilidad"
            }
        },
        // Buttons DataTable
        dom: 'Bfrtip',
        buttons: [
            {
                extend: 'excelHtml5',
                text:'<i class="fa-solid fa-file-excel"></i>',
                titleAttr: 'Excel',
                className: 'btn btn-success btn-xs',
                // style: 'FONT-SIZE: 12pt',
                // fontSize: 12,
            },
        ],
        scrollX: true,
        paging: true,
        responsive: true,
        autoWidth: false,
        destroy: true,
        deferRender: true,
        pageLength: 25,
        order: [[0, 'asc']],
        ajax: {
            url: window.location.pathname,
            type: 'POST',
            data: {
                'action': 'searchdata'
            },
            dataSrc: "",
            headers: {
                'X-CSRFToken': csrftoken
            }
        },
        columns: [
            {"data": "id"},
            {"data": "dni"},
            {"data": "apellido"},
            {"data": "nombre"},
            {"data": "domicilio"},
            {"data": "departamento"},
            {"data": "codigo_circuito"},
            {"data": "nombre_circuito"},
            {"data": "mesa"},
            {"data": "voto"},
        ],
        columnDefs: [
            {
                targets: [-10],
                class: 'text-center',
                orderable: false,
                render: function (data, type, row) {
                    return buttons = '<a href="/erp/padron/update/' + row.id + '/" style="background-color:var(--orange01); FONT-SIZE: 12pt" class="badge text-white"><i class="fa-regular fa-address-card"></i></a>';
                }
            },
            {
                targets: [-1, -2, -3, -4, -5, -6, -7, -8, -9],
                class: 'text-left',
            },
            {
                targets: [-1],
                class: 'text-center',
                orderable: false,
                render: function (data, type, row) {
                        if (row.voto === 1){
                            return buttons ='<span style="background-color:var(--green08); FONT-SIZE: 10pt" class="badge text-white btn-rounded btn-rounded">' + row.voto + '</span> ';
                        }else{
                            return buttons ='<span style="background-color:var(--red01); FONT-SIZE: 10pt" class="badge text-white btn-rounded">' + row.voto + '</span> ';
                        }

                }
            },

        ],
        initComplete: function (settings, json) {

        }
    });
});


