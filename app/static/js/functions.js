function message_error(obj) {
    let html = '';
    if (typeof (obj) === 'object') {
        html = '<ul style="text-align: left;">';
        $.each(obj, function (key, value) {
            html += '<li>' + key + ': ' + value + '</li>';
        });
        html += '</ul>';
    } else {
        html = '<p>' + obj + '</p>';
    }
    Swal.fire({
        title: '! Error !',
        html: html,
        icon: 'error'
    });
}

function alert_confirm(urls, dataForm, titles, message, callback) {
    $.confirm({
        icon: 'fa-regular fa-circle-check',
        title: titles,
        content: message,
        type: 'blue',
        typeAnimated: true,
        columnClass: 'small',
        buttons: {
            info: {
                text: 'Si',
                btnClass: 'btn-success',
                action: function () {
                    $.ajax({
                        url: urls,
                        type: 'POST',
                        data: dataForm,
                        datatype: 'json'
                    }).done(function (data) {
                        if (!data.hasOwnProperty('error')) {
                            callback();
                            return false;
                        }
                        message_error(data.error);
                    }).fail(function (jqXHR, textStatus, errorThrawn) {
                        alert(textStatus + ': ' + errorThrawn);
                        console.log(errorThrawn)
                    }).always(function (data) {
                        console.log(data)
                    });
                }
            },
            danger: {
                text: "No",
                btnClass: 'btn-danger',
                action: function () {

                }
            },
        }
    });
}