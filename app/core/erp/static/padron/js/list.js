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
            // headers: {
            //     'X-CSRFToken': csrftoken
            // }
        },
        columns: [
            {"data": "id"},
            {"data": "dni"},
            {"data": "tipo_dni"},
            {"data": "apellido"},
            {"data": "nombre"},
            {"data": "sexo"},
            {"data": "domicilio"},
            {"data": "departamento"},
            {"data": "circuito"},
            {"data": "nombre_circuito"},
            {"data": "voto"},
        ],
        columnDefs: [
            {
                targets: [-11],
                class: 'text-center',
                orderable: false,
                render: function (data, type, row) {
                    return buttons = '<a href="/erp/padron/update/' + row.id + '/" style="background-color:var(--orange01); FONT-SIZE: 12pt" class="badge text-white"><i class="fa-regular fa-address-card"></i></a>';
                }
            },
            {
                targets: [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10],
                class: 'text-left',
            },

        ],
        initComplete: function (settings, json) {

        }
    });
});


