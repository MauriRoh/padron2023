let dataproces = {
    items: {
        voto: 0,
    },

};

// Actualizar Voto desde la Tabla
$(function () {

    $('form').on('submit', function (e) {
        e.preventDefault();

        dataproces.items.voto = $('input[name="voto"]').val();

        let dataForm = new FormData();
        dataForm.append('action', $('input[name="action"]').val());
        dataForm.append('dataproces', JSON.stringify(dataproces.items));
        alert_confirm(window.location.pathname, dataForm, 'Confirmar', '¿Estás seguro de realizar la siguiente Acción?', function () {
            location.href = '/erp/padron/list/';
        });
    });

});




        // dni: '',
        // apellido: '',
        // nombre: '',
        // domicilio: '',
        // departamento: '',
        // nombre_circuito: '',
        // codigo_circuito: '',
        // mesa: 0,



        // dataproces.items.id = $('input[name="id"]').val();
        // dataproces.items.dni = $('input[name="dni"]').val();
        // dataproces.items.apellido = $('input[name="apellido"]').val();
        // dataproces.items.nombre = $('input[name="nombre"]').val();
        // dataproces.items.domicilio = $('input[name="domicilio"]').val();
        // dataproces.items.departamento = $('input[name="departamento"]').val();
        // dataproces.items.nombre_circuito = $('input[name="nombre_circuito"]').val();
        // dataproces.items.codigo_circuito = $('input[name="codigo_circuito"]').val();
        // dataproces.items.mesa = $('input[name="mesa"]').val();