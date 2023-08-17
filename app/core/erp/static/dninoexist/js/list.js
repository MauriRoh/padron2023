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
            {"data": "num_distrito"},
            {"data": "num_circuito"},
            {"data": "num_mesa"},
            {"data": "num_orden"},
            {"data": "dni"},
            {"data": "apellido"},
            {"data": "nombre"},
        ],
        columnDefs: [
            {
                targets: [-8],
                class: 'text-center',
                orderable: false,
                render: function (data, type, row) {
                    let buttons = '<a href="/erp/dninoexist/update/' + row.id + '/" style="background-color:var(--orange01); FONT-SIZE: 12pt" class="badge text-white"><i class="fa-solid fa-pencil"></i></a>';
                    buttons += '<a href="/erp/dninoexist/delete/' + row.id + '/" style="background-color:var(--red01); FONT-SIZE: 12pt" class="badge text-white"><i class="fa-regular fa-trash-can"></i></a>';
                    return buttons;
                }
            },
            {
                targets: [-1, -2, -3, -4, -5, -6, -7],
                class: 'text-left',
            },

        ],
        initComplete: function (settings, json) {

        }
    });

});