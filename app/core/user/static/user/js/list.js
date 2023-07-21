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
        order: [[ 0, 'asc' ]],
        ajax: {
            url: window.location.pathname,
            type: 'POST',
            data: {
                'action': 'searchdata'
            },
            dataSrc: ""
            // headers: {
            //     'X-CSRFToken': csrftoken
            // }
        },
        columns: [
            {"data": "id"},
            {"data": "full_name"},
            {"data": "username"},
            {"data": "email"},
            {"data": "date_joined"},
            {"data": "image"},
            {"data": "groups"},
        ],
        columnDefs: [
            {
                targets: [-7],
                class: 'text-center',
                orderable: false,
                render: function (data, type, row) {
                    let buttons = '<a href="/user/update/' + row.id + '/" style="background-color:var(--orange01); FONT-SIZE: 12pt" class="badge text-white"><i class="fa-solid fa-pencil"></i></a>';
                    buttons += '<a href="/user/delete/' + row.id + '/" style="background-color:var(--red01); FONT-SIZE: 12pt" class="badge text-white"><i class="fa-regular fa-trash-can"></i></a>';
                    return buttons;
                }
            },
            {
                targets: [-2],
                class: 'text-center',
                orderable: false,
                render: function (data, type, row) {
                    return '<img src="' + row.image + '" class="img-fluid d-block mx-auto" style="width: 30px; height: 30px;">';
                }
            },
            {
                targets: [-1],
                class: 'text-center',
                orderable: false,
                render: function (data, type, row) {
                    let html = '';
                    $.each(row.groups, function (key, value) {
                        html += '<span style="background-color:var(--green08); FONT-SIZE: 10pt" class="badge text-white">' + value.name + '</span> ';
                    });
                    return html;
                }
            },
        ],
        initComplete: function (settings, json) {

        }
    });
});