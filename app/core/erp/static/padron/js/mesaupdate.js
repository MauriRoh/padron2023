let dataproces = {
    items: {
        id: 0,
        // dni: 0,
        // apellido: '',
        // nombre: '',
        // domicilio: '',
        // departamento: '',
        // nombre_circuito: '',
        // codigo_circuito: '',
        // mesa: 0,
        value: 0,

    },

};


$(function () {
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
            // for (i in data) {
            //     console.log(data[i]['dni'])
            //     console.log(data[i]['apellido'])
            //     console.log(data[i]['nombre'])
            //     console.log(data[i]['mesa'])
            //     console.log(data[i]['voto'])
            // }
            data.forEach(i => {
                template += `
                    <tr>
                        <td class="text-center">
                            ${i.voto === 1 ? `
                                <input name="checkboxMesa" class="form-check-input text-center" type="checkbox" checked value="${i.voto}" id="${i.id}">
                            ` : `
                                <input name="checkboxMesa" class="form-check-input text-center" type="checkbox" value="${i.voto}" id="${i.id}">
                            `}
                            ${i.id}
                        </td>
                        <td>${i.dni}</td>
                        <td>${i.apellido}</td>
                        <td>${i.nombre}</td>
                        <td>${i.domicilio}</td>
                        <td>${i.departamento}</td>
                        <td>${i.nombre_circuito}</td>
                        <td>${i.codigo_circuito}</td>
                        <td>${i.mesa}</td>
                    </tr>
            `
            });
            tableAllEvents.innerHTML = template;
        }).fail(function (jqXHR, textStatus, errorThrawn) {
            // alert(textStatus + ' - ' + errorThrawn);
        }).always(function (data) {

        });
    });

    $('form').on('submit', function (e) {
        e.preventDefault();
        let tbl_Padron = document.getElementById('tblPadron');
        //let tbl_Padron = $('#tblPadron').val();
        console.log('Tabla tbl_Padron')
        console.log(tbl_Padron.rows)
        // for (let i=0, row; tbl_Padron.row[i]; i++){
        //     console.log(row);
        // }

        // tblPadron.forEach( i => {
        //     console.log(i)
        // })

        // for (let i=0; i < form.length; i++){
        //     console.log(form[i])
        // }

        // dataproces.items.id = $('input[id=""]').val();
        // dataproces.items.value = $('input[name="checkboxMesa"]').val();
        //
        // let dataForm = new FormData();
        // dataForm.append('action', $('input[name="action"]').val());
        // dataForm.append('dataproces', JSON.stringify(dataproces.items));
        // alert_confirm(window.location.pathname, dataForm, 'Confirmar', '¿Estás seguro de realizar la siguiente Acción?', function () {
        //     location.href = '/erp/padron/mesaupdate/';
        // });
    });


});


// <td><input className="form-check-input text-center" type="checkbox" value="" id="${i.id}">${i.voto}</td>