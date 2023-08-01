$('input[name="num_distrito"]').bind('keypress', function(event) {

    let regex = new RegExp("[0-9]");
    let key = String.fromCharCode(!event.charCode ? event.which : event.charCode);

    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

$('input[name="num_circuito"]').bind('keypress', function(event) {

    let regex = new RegExp("[0-9]");
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

$('select[id="select2-search_dni-container"]').bind('keypress', function(event) {

    let regex = new RegExp("[0-9]");
    let key = String.fromCharCode(!event.charCode ? event.which : event.charCode);

    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});


$('input[id="select2-search_dni-container"]').bind('keypress', function(event) {

    let regex = new RegExp("[0-9]");
    let key = String.fromCharCode(!event.charCode ? event.which : event.charCode);

    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

//
// const select2_search_dni_container = $('.select2-search_dni-container');
// select2_search_dni_container.on()
// const autocompleteSelect = $('#autocompleteSelect');
//
//   // Función para validar que solo se ingresen números
//   function validarNumeros(event) {
//     // Obtener el código de la tecla presionada
//     const charCode = (event.which) ? event.which : event.keyCode;
//
//     // Asegurarse de que solo se permitan números (0-9) o la tecla de retroceso (8)
//     if (charCode !== 8 && (charCode < 48 || charCode > 57)) {
//       event.preventDefault();
//       return false;
//     }
//
//     return true;
//   }
//
//   // Agregar el evento keypress al campo de autocompletado select2
//   autocompleteSelect.on('keypress', validarNumeros);
