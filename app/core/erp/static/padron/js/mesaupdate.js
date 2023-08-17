let dataproces = {
    items: {
        mesa: 0,
    },
};

let checkVoto = [];
let flagChecked = 0;


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
            data.forEach(i => {
                template += `
                    <tr>
                        <td class="text-center">
                            ${i.voto === 1 ? `
                                <input name="checkboxMesa" class="form-check-input text-center" type="checkbox" checked value="${i.voto}" id="${i.id}">
                            ` : `
                                <input name="checkboxMesa" class="form-check-input text-center" type="checkbox" value="${i.voto}" id="${i.id}">
                            `}
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

    document.addEventListener('DOMContentLoaded', function () {
        checkVoto = [];
        const checkboxes = document.querySelectorAll('input[name="checkboxMesa"]')
        checkboxes.forEach(i => {
            i.addEventListener('change', function () {
                const rowId = this.id;
                const isChecked = this.checked;

                if (isChecked === true) {
                    flagChecked = 1;
                } else {
                    flagChecked = 0;
                }

                const mesa = {
                    id: rowId,
                    voto: flagChecked
                }
                checkVoto.push(mesa);
            });
        });

    });

    $('form').on('submit', function (e) {
        e.preventDefault();

        let tablePadron = document.getElementById('tblPadron');
        let rows = tablePadron.getElementsByTagName('tr');
        // let mesa = 0;

        const rowTr = rows[1];
        const cellMesa = rowTr.getElementsByTagName('td');
        let mesa = cellMesa[8].textContent;

        // for (let i = 1; i < rows.length; i++) {
        //     const rowTr = rows[i];
        //     const cellMesa = rowTr.getElementsByTagName('td');
        //     mesa = cellMesa[8].textContent;
        //
        // }

        const input_check = document.querySelectorAll('input[name="checkboxMesa"]')
        input_check.forEach(i => {

            if (i.checked) {
                flagChecked = 1;
            } else {
                flagChecked = 0;
            }
            const checkedVoto = {
                id: parseInt(i.id),
                voto: flagChecked
            }

            checkVoto.push(checkedVoto);
        });

        dataproces.items.mesa = mesa
        dataproces.items.checkVoto = checkVoto
        dataproces.items.action = 'update_dni'

        // console.log('Valores del Data Proces')
        // console.log(dataproces)

        let dataForm = new FormData();
        dataForm.append('action', $('input[name="action"]').val());
        dataForm.append('dataproces', JSON.stringify(dataproces.items));
        alert_confirm(window.location.pathname, dataForm, 'Confirmar', '¿Estás seguro de realizar la siguiente Acción?', function () {
            location.href = '/erp/padron/mesaupdate/';
        });

    });

    // Limpia los Campos
    $('.btnRemoveAll').on('click', function () {
        document.getElementById('id_search').value = '';
        document.getElementById('tableAllEvents').innerHTML = '';
    });

});
