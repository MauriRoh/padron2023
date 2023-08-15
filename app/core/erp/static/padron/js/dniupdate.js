let dataproces = {
    items: {
        id: 0,
        voto: 0,
    },

};

// Actualizar Voto desde la Tabla
$(function () {
    document.getElementById('voto').style.display = 'block';
    document.getElementById('voto_valid').style.display = 'none';
    document.getElementById('voto_invalid').style.display = 'none';

    // // Aurocomplet DNI
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
    //                 // ids: JSON.stringify(vents.get_ids())
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
    //     placeholder: 'Ingrese DNI',
    //     minimumInputLength: 6,
    // }).on('select2:select', function (e) {
    //     let data = e.params.data;
    //     document.getElementById('id').value = data.id;
    //     document.getElementById('id_dni').value = data.dni;
    //     document.getElementById('apellido').value = data.apellido;
    //     document.getElementById('nombre').value = data.nombre;
    //     document.getElementById('domicilio').value = data.domicilio;
    //     document.getElementById('departamento').value = data.departamento;
    //     document.getElementById('codigo_circuito').value = data.codigo_circuito;
    //     document.getElementById('nombre_circuito').value = data.nombre_circuito;
    //     document.getElementById('mesa').value = data.mesa;
    //     document.getElementById('voto').value = data.voto;
    //     if (parseInt(data.voto) === 1) {
    //         document.getElementById('voto').style.display = 'none';
    //         document.getElementById('voto_invalid').style.display = 'none';
    //         document.getElementById('voto_valid').style.display = 'block';
    //         document.getElementById('voto_valid').value = data.voto;
    //     } else if (parseInt(data.voto) === 0) {
    //         document.getElementById('voto').style.display = 'none';
    //         document.getElementById('voto_valid').style.display = 'none';
    //         document.getElementById('voto_invalid').style.display = 'block';
    //         document.getElementById('voto_invalid').value = data.voto;
    //     }
    //     $(this).val('').trigger('change.select2');
    // });

    // Busca y completa campo según DNI
    $('#id_btnSearchProduct').on('click', function (e) {
        e.preventDefault();
        let request = $('#id_search').val();
        let template = '';
        $.ajax({
            url: window.location.pathname,
            type: 'POST',
            data: {
                'action': 'search',
                'term': request
            },
            dataType: 'json',
        }).done(function (data) {
            // console.log(data[0]['id'])
            // console.log(data[0]['dni'])

            document.getElementById('id').value = data[0]['id'];
            document.getElementById('id_dni').value = data[0]['dni'];
            document.getElementById('apellido').value = data[0]['apellido'];
            document.getElementById('nombre').value = data[0]['nombre'];
            document.getElementById('domicilio').value = data[0]['domicilio'];
            document.getElementById('departamento').value = data[0]['departamento'];
            document.getElementById('codigo_circuito').value = data[0]['codigo_circuito'];
            document.getElementById('nombre_circuito').value = data[0]['nombre_circuito'];
            document.getElementById('mesa').value = data[0]['mesa'];
            document.getElementById('voto').value = data[0]['voto'];
            if (parseInt(data[0]['voto']) === 1) {
                document.getElementById('voto').style.display = 'none';
                document.getElementById('voto_invalid').style.display = 'none';
                document.getElementById('voto_valid').style.display = 'block';
                document.getElementById('voto_valid').value = data[0]['voto'];
            } else if (parseInt(data[0]['voto']) === 0) {
                document.getElementById('voto').style.display = 'none';
                document.getElementById('voto_valid').style.display = 'none';
                document.getElementById('voto_invalid').style.display = 'block';
                document.getElementById('voto_invalid').value = data[0]['voto'];
            }
        }).fail(function (jqXHR, textStatus, errorThrawn) {
            alert(textStatus + ' - ' + errorThrawn);
        }).always(function (data) {

        });
    });

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
            location.href = '/erp/padron/dniupdate/';
        });
    });

    // Limpia los Campos
    $('#cleaninputdni').on('click', function () {

        document.getElementById('id_search').value = '';

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

});

