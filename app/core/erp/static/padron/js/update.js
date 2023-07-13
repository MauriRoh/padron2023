let dataproces = {
    items: {
        id: 0,
        dni: '',
        apellido: '',
        nombre: '',
        sexo: '',
        domicilio: '',
        tipo_dni: '',
        departamento: '',
        circuito: '',
        nombre_circuito: '',
        voto: 0,
    },

};



$(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();
        dataproces.items.id = $('input[name="id"]').val();
        dataproces.items.dni = $('input[name="dni"]').val();
        dataproces.items.apellido = $('input[name="apellido"]').val();
        dataproces.items.nombre = $('input[name="nombre"]').val();
        dataproces.items.sexo = $('input[name="sexo"]').val();
        dataproces.items.domicilio = $('input[name="domicilio"]').val();
        dataproces.items.tipo_dni = $('input[name="tipo_dni"]').val();
        dataproces.items.departamento = $('input[name="departamento"]').val();
        dataproces.items.circuito = $('input[name="circuito"]').val();
        dataproces.items.nombre_circuito = $('input[name="nombre_circuito"]').val();
        dataproces.items.voto = 0;

        let dataForm = new FormData();
        dataForm.append('action', $('input[name="action"]').val());
        dataForm.append('dataproces', JSON.stringify(dataproces.items));
        console.log(dataForm)
        alert_confirm(window.location.pathname, dataForm, 'Confirmar', '¿Estás seguro de realizar la siguiente Acción?', function () {
            location.href = '/erp/padron/list/';
        });
    });

    // Autocomplet DNI

    $('input[name="dni"]').autocomplete({
            source: function (request, response) {
            $.ajax({
                url: window.location.pathname,
                type: 'POST',
                data: {
                    'action': 'search_dni',
                    'term': request.term
                },
                dataType: 'json',
            }).done(function (data) {
                response(data);
            }).fail(function (jqXHR, textStatus, errorThrown) {
                //alert(textStatus + ': ' + errorThrown);
            }).always(function (data) {

            });
        },
        delay: 500,
        minLength: 1,
        select: function (event, ui) {
            event.preventDefault();
            console.clear(ui.dni);
            // ui.item.cant = 1;
            // ui.item.subtotal = 0.00;
            // ui.item.additional_cost = 0;
            // ui.item.discount = 0;
            // console.log(vents.items);
            // vents.add(ui.item);
            // $(this).val('');
        }
    });


    $('#cleaninputdni').on('click', function () {
        document.getElementById("ingresedni").value = '';
    });

});

