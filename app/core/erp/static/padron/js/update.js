let dataproces = {
    items: {
        id: 0,
        // dni: '',
        // apellido: '',
        // nombre: '',
        // // sexo: '',
        // domicilio: '',
        // // tipo_dni: '',
        // departamento: '',
        // circuito: '',
        // nombre_circuito: '',
        voto: 0,
        action: '',
    },

};

// Actualizar Voto desde la Tabla
$(function () {

    $('form').on('submit', function (e) {
        e.preventDefault();
        dataproces.items.id = $('input[name="id"]').val();
        // dataproces.items.dni = $('input[name="dni"]').val();
        // dataproces.items.apellido = $('input[name="apellido"]').val();
        // dataproces.items.nombre = $('input[name="nombre"]').val();
        // // dataproces.items.sexo = $('input[name="sexo"]').val();
        // dataproces.items.domicilio = $('input[name="domicilio"]').val();
        // // dataproces.items.tipo_dni = $('input[name="tipo_dni"]').val();
        // dataproces.items.departamento = $('input[name="departamento"]').val();
        // dataproces.items.circuito = $('input[name="circuito"]').val();
        // dataproces.items.nombre_circuito = $('input[name="nombre_circuito"]').val();
        dataproces.items.voto = $('input[name="voto"]').val();

        let dataForm = new FormData();
        dataForm.append('action', $('input[name="action"]').val());
        dataForm.append('dataproces', JSON.stringify(dataproces.items));
        alert_confirm(window.location.pathname, dataForm, 'Confirmar', '¿Estás seguro de realizar la siguiente Acción?', function () {
            location.href = '/erp/padron/list/';
        });
    });

});
