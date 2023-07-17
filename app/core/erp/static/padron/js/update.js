let dataproces = {
    items: {
        id: 0,
        dni: '',
        apellido: '',
        nombre: '',
        // sexo: '',
        domicilio: '',
        // tipo_dni: '',
        departamento: '',
        circuito: '',
        nombre_circuito: '',
        voto: 0,
        action:'',
    },

};


// Actualizar Voto desde la Tabla
$(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();
        dataproces.items.id = $('input[name="id"]').val();
        dataproces.items.dni = $('input[name="dni"]').val();
        dataproces.items.apellido = $('input[name="apellido"]').val();
        dataproces.items.nombre = $('input[name="nombre"]').val();
        // dataproces.items.sexo = $('input[name="sexo"]').val();
        dataproces.items.domicilio = $('input[name="domicilio"]').val();
        // dataproces.items.tipo_dni = $('input[name="tipo_dni"]').val();
        dataproces.items.departamento = $('input[name="departamento"]').val();
        dataproces.items.circuito = $('input[name="circuito"]').val();
        dataproces.items.nombre_circuito = $('input[name="nombre_circuito"]').val();
        dataproces.items.voto = $('input[name="voto"]').val();

        let dataForm = new FormData();
        dataForm.append('action', $('input[name="action"]').val());
        dataForm.append('dataproces', JSON.stringify(dataproces.items));
        alert_confirm(window.location.pathname, dataForm, 'Confirmar', '¿Estás seguro de realizar la siguiente Acción?', function () {
            location.href = '/erp/padron/list/';
        });
    });

    // Autocomplet DNI
    $('select[name="dni"]').select2({
        theme: "bootstrap4",
        language: 'es',
        allowClear: true,
        ajax: {
            delay: 250,
            type: 'POST',
            url: window.location.pathname,
            data: function (params) {
                let queryParameters = {
                    term: params.term,
                    action: 'search_dni',
                    // ids: JSON.stringify(vents.get_ids())
                }
                return queryParameters;
            },
            // headers: {
            //     'X-CSRFToken': csrftoken
            // },
            processResults: function (data) {
                return {
                    results: data
                };
            },
        },
        placeholder: 'Ingrese DNI',
        minimumInputLength: 6,
    //     templateResult: formatRepo,
    }).on('select2:select', function (e) {
        let data = e.params.data;
        document.getElementById('id').value = data.id;
        document.getElementById('id_dni').value = data.dni;
        document.getElementById('apellido').value = data.apellido;
        document.getElementById('nombre').value = data.nombre;
        document.getElementById('domicilio').value = data.domicilio;
        document.getElementById('departamento').value = data.departamento;
        document.getElementById('circuito').value = data.circuito;
        document.getElementById('nombre_circuito').value = data.nombre_circuito;
        document.getElementById('voto').value = data.voto;
        $(this).val('').trigger('change.select2');
    //     if(!Number.isInteger(data.id)){
    //         return false;
    //     }
    });

    // Actualizar Voto desde la url voto.html
    $('.btnUpdateDNI').on('click', function (e){
        e.preventDefault();
        dataproces.items.id = $('input[name="id"]').val();
        dataproces.items.voto = $('input[name="voto"]').val();
        dataproces.items.action = 'update_dni'

        let dataForm = new FormData();
        dataForm.append('action', $('input[name="action"]').val());
        dataForm.append('dataproces', JSON.stringify(dataproces.items));
        console.log(dataForm)
        alert_confirm(window.location.pathname, dataForm, 'Confirmar', '¿Estás seguro de realizar la siguiente Acción?', function () {
            location.href = '/erp/padron/list/';
        });
    });

    $('#cleaninputdni').on('click', function () {
        document.getElementById("id_dni").value = '';
    });

});
