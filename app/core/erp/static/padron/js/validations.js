$('input[name="num_distrito"]').bind('keypress', function(event) {

    let regex = new RegExp("[0-9]");
    let key = String.fromCharCode(!event.charCode ? event.which : event.charCode);

    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

$('input[name="num_circuito"]').bind('keypress', function(event) {

    let regex = new RegExp("[a-zA-ZáéíóúÁÉÍÓÚÑñüÜ0-9 ]");
    let key = String.fromCharCode(!event.charCode ? event.which : event.charCode);

    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

$('input[name="num_mesa"]').bind('keypress', function(event) {

    let regex = new RegExp("[0-9]");
    let key = String.fromCharCode(!event.charCode ? event.which : event.charCode);

    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

$('input[name="num_orden"]').bind('keypress', function(event) {

    let regex = new RegExp("[0-9]");
    let key = String.fromCharCode(!event.charCode ? event.which : event.charCode);

    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

$('input[name="dni"]').bind('keypress', function(event) {

    let regex = new RegExp("[0-9]");
    let key = String.fromCharCode(!event.charCode ? event.which : event.charCode);

    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

$('input[name="apellido"]').bind('keypress', function(event) {

    let regex = new RegExp("[a-zA-ZáéíóúÁÉÍÓÚÑñüÜ ]");
    let key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

$('input[name="nombre"]').bind('keypress', function(event) {

    let regex = new RegExp("[a-zA-ZáéíóúÁÉÍÓÚÑñüÜ ]");
    let key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

$('input[id="id_search"]').bind('keypress', function(event) {

    let regex = new RegExp("[0-9]");
    let key = String.fromCharCode(!event.charCode ? event.which : event.charCode);

    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
