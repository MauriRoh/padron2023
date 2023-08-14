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
