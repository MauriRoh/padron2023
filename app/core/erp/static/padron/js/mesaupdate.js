let dataproces = {
    items: {
        id: 0,
        dni: 0,
        apellido: '',
        nombre: '',
        domicilio: '',
        departamento: '',
        nombre_circuito: '',
        codigo_circuito: '',
        mesa: 0,
        voto: 0,

    },
    list: function () {
        $('#tblPadron').DataTable({
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
            },
            responsive: true,
            autoWidth: false,
            destroy: true,
            data: this.items,
            columns: [
                {"data": "id"},
                {"data": "dni"},
                {"data": "apellido"},
                {"data": "nombre"},
                {"data": "domicilio"},
                {"data": "departamento"},
                {"data": "nombre_circuito"},
                {"data": "codigo_circuito"},
                {"data": "voto"},
            ],
            columnDefs: [
                // {
                //     targets: [0],
                //     class: 'text-center',
                //     orderable: false,
                //     render: function (data, type, row) {
                //         return '<a rel="remove" style="background-color:var(--structure_red); FONT-SIZE: 12pt" class="btn badge text-white"><i class="fa-solid fa-trash-can"></i></a>';
                //     }
                // },
                // {
                //     targets: [-2],
                //     class: 'text-center',
                //     orderable: false,
                //     render: function (data, type, row) {
                //         return '<input type="text" name="cant" class="form-control form-control-sm input-sm text-center" autocomplete="off" value="' + row.cant + '">';
                //     }
                // },
                // {
                //     targets: [-4],
                //     class: 'text-center',
                //     orderable: false,
                //     render: function (data, type, row) {
                //             return '<span style="background-color:var(--structure_blue4); FONT-SIZE: 10pt" class="badge text-white">'+data+'</span>'
                //     }
                // },
                {
                    targets: [-2, -3, -4, -5, -6, -7, -8],
                    class: 'text-left',
                },
                {
                    targets: [-1],
                    class: 'text-center',
                    orderable: false,
                    render: function (data, type, row) {
                        if (row.voto === 1) {
                            return buttons = '<span style="background-color:var(--green08); FONT-SIZE: 10pt" class="badge text-white btn-rounded btn-rounded">' + row.voto + '</span> ';
                        } else {
                            return buttons = '<span style="background-color:var(--red01); FONT-SIZE: 10pt" class="badge text-white btn-rounded">' + row.voto + '</span> ';
                        }

                    }
                },
            ],
            /*Este registra los cambios que se editan dentro de la tabla.
              sobre la columna de cantidades */
            // rowCallback(row, data, displayNum, displayIndex, dataIndex) {
            //     $(row).find('input[name="cant"]').TouchSpin({
            //         min: 1,
            //         // max: 1000000000,
            //         max:data.stock,
            //         step: 1,
            //         buttondown_class: 'input-group-text',   // Alinea el botón baja al input
            //         buttonup_class: 'input-group-text',
            //     });
            //
            // },
            initComplete: function (settings, json) {
            }
        });
    },
};

// Actualizar Voto desde la Tabla
$(function () {
    // document.getElementById('voto').style.display = 'block';
    // document.getElementById('voto_valid').style.display = 'none';
    // document.getElementById('voto_invalid').style.display = 'none';

    // // Buscar Mesa
    // $('#searchMesa').keyup(function(e) {
    //         consulta = $("#searchMesa").val();
    //         $.ajax({
    //             url: window.location.pathname,
    //             type: 'GET',
    //             data: {
    //                 'action': 'search_mesa',
    //                 'term': request.term
    //             },
    //             // dataType: 'json',
    //
    //             success: function (data) {
    //                 console.log(data[0].dni);
    //             },
    //             error: function (message) {
    //                 console.log(message);
    //             }
    //         });
    //     });

    // Buscar Mesa - Autocomplet JQuery
    $('input[name="search"]').autocomplete({
        source: function (request, response) {
            $.ajax({
                url: window.location.pathname,
                type: 'POST',
                data: {
                    'action': 'search_mesa',
                    'term': request.term
                },
                dataType: 'json',
            }).done(function (data) {
                console.log(data)
                for (i in data) {
                    dataproces.items.id.push(data[i].dni)
                    dataproces.items.mesa.push(data[i].mesa)
                    console.log(data[i].dni)
                    console.log(data[i].mesa)
                }
                response(data);
            }).fail(function (jqXHR, textStatus, errorThrown) {
                //alert(textStatus + ': ' + errorThrown);
            }).always(function (data) {

            });
        },
        delay: 500,
        minLength: 1,
        select: function (event, ui) {
            // console.log(ui.item)

        }
    });

    // $('select[name="dni"]').select2({
    //     theme: "bootstrap4",
    //     language: 'es',
    //     allowClear: true,
    //     ajax: {
    //         delay: 250,
    //         type: 'POST',
    //         url: window.location.pathname,
    //         data: function (params) {
    //             let queryParameters = {
    //                 term: params.term,
    //                 action: 'search_dni',
    //             }
    //             return queryParameters;
    //         },
    //         headers: {
    //             'X-CSRFToken': csrftoken
    //         },
    //         processResults: function (data) {
    //             return {
    //                 results: data
    //             };
    //         },
    //     },
    //     placeholder: 'Ingrese N° Mesa',
    //     minimumInputLength: 2,
    // }).on('select2:select', function (e) {
    //     let data = e.params.data;
    //     document.getElementById('id').value = data.id;
    //     // document.getElementById('id_dni').value = data.dni;
    //     // document.getElementById('apellido').value = data.apellido;
    //     // document.getElementById('nombre').value = data.nombre;
    //     // document.getElementById('domicilio').value = data.domicilio;
    //     // document.getElementById('departamento').value = data.departamento;
    //     // document.getElementById('codigo_circuito').value = data.codigo_circuito;
    //     // document.getElementById('nombre_circuito').value = data.nombre_circuito;
    //     // document.getElementById('mesa').value = data.mesa;
    //     // document.getElementById('voto').value = data.voto;
    //     // if (parseInt(data.voto) === 1) {
    //     //     document.getElementById('voto').style.display = 'none';
    //     //     document.getElementById('voto_invalid').style.display = 'none';
    //     //     document.getElementById('voto_valid').style.display = 'block';
    //     //     document.getElementById('voto_valid').value = data.voto;
    //     // } else if (parseInt(data.voto) === 0) {
    //     //     document.getElementById('voto').style.display = 'none';
    //     //     document.getElementById('voto_valid').style.display = 'none';
    //     //     document.getElementById('voto_invalid').style.display = 'block';
    //     //     document.getElementById('voto_invalid').value = data.voto;
    //     // }
    //     $(this).val('').trigger('change.select2');
    // });

    // Actualizar Voto desde la url dniupdate.html
    $('.btnUpdateDNI').on('click', function (e) {
        e.preventDefault();
        dataproces.items.id = $('input[name="id"]').val();
        dataproces.items.voto = $('input[name="voto"]').val();
        dataproces.items.action = 'update_dni'

        let dataForm = new FormData();
        dataForm.append('action', $('input[name="action"]').val());
        dataForm.append('dataproces', JSON.stringify(dataproces.items));
        alert_confirm(window.location.pathname, dataForm, 'Confirmar', '¿Estás seguro de realizar la siguiente Acción?', function () {
            location.href = '/erp/padron/tableupdate/';
        });
    });

    // Limpia los Campos
    $('#cleaninputdni').on('click', function () {
        document.getElementById('id').value = '';
        document.getElementById('id_dni').value = '';
        document.getElementById('apellido').value = '';
        document.getElementById('nombre').value = '';
        document.getElementById('domicilio').value = '';
        document.getElementById('departamento').value = '';
        document.getElementById('codigo_circuito').value = '';
        document.getElementById('nombre_circuito').value = '';
        document.getElementById('mesa').value = '';
        document.getElementById('voto').value = '';
        document.getElementById('voto_invalid').value = '';
        document.getElementById('voto_valid').value = '';
        document.getElementById('voto').style.display = 'block';
        document.getElementById('voto_valid').style.display = 'none';
        document.getElementById('voto_invalid').style.display = 'none';
    });

    $('#btnRemoveInputMesa').on('click', function (){
        document.getElementById('search').value = '';
    });



})
;
