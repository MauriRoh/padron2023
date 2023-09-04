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
                    ${i.voto === 1 ? `
                        <tr class="table-success trMesaChecked" id="trId_${i.id}" onclick='rowTablePadron("trId_${i.id}", "${i.id}")'>
                            <td class="text-center" id="checkboxId_${i.id}">
                                <input name="checkboxMesa" class="form-check-input text-center" type="checkbox" checked value="${i.voto}" id="${i.id}">
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
                    ` : `
                        <tr class="table-danger trMesaChecked" id="trId_${i.id}" onclick='rowTablePadron("trId_${i.id}", "${i.id}")'>
                            <td class="text-center" id="checkboxId_${i.id}">
                                <input name="checkboxMesa" class="form-check-input text-center" type="checkbox" value="${i.voto}" id="${i.id}">
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
                    `}
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
        const checkboxes = document.querySelectorAll('input[name="checkboxMesa"]');
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

        const rowTr = rows[1];
        const cellMesa = rowTr.getElementsByTagName('td');
        let mesa = cellMesa[8].textContent;

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

// 
function rowTablePadron(trId, checkbodId) {

    const trMesa = document.querySelectorAll('tr');
    const inputCheck = document.getElementById(checkbodId)

    const valueTr = Object.values(trMesa)
    valueTr.forEach( trElement => {
        if(trId===trElement.id){
            if(trElement.classList.value === 'table-success trMesaChecked'){
                trElement.classList.value = 'table-danger trMesaChecked'
                inputCheck.checked = !inputCheck.checked;
                inputCheck.value = '0'
                inputCheck.checked = false
            } else {
                trElement.classList.value = 'table-success trMesaChecked'
                inputCheck.checked = !inputCheck.checked;
                inputCheck.value = '1'
                inputCheck.checked = true;
            }
        }

    })

}
