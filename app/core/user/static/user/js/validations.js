$('input[name="first_name"]').bind('keypress', function(event) {

    let regex = new RegExp("[a-zA-ZáéíóúÁÉÍÓÚÑñüÜ ]");
    let key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

$('input[name="last_name"]').bind('keypress', function(event) {

    let regex = new RegExp("[a-zA-ZáéíóúÁÉÍÓÚÑñüÜ ]");
    let key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

$('input[name="email"]').bind('keypress', function(event) {

    let regex = new RegExp("[a-zA-Z0-9üÜ_@.]");
    let key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }

});

