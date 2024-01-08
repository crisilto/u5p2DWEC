function validarFormulario() {
    const nombreInput = document.getElementById('nombre');
    const apellidosInput = document.getElementById('apellidos');
    const direccionInput = document.getElementById('direccion');
    const poblacionInput = document.getElementById('poblacion');
    const codPostalInput = document.getElementById('codPostal');
    const telefonoInput = document.getElementById('telefono');
    const movilInput = document.getElementById('movil');
    const dniInput = document.getElementById('dni');
    const cuentaCorrienteInput = document.getElementById('cuentaCorriente');
    const cuotaMensualInput = document.getElementById('cuotaMensual');
    const fechaNacimientoInput = document.getElementById('fechaNacimiento');
    const numHijosInput = document.getElementById('numHijos');
    const emailInput = document.getElementById('email');

    //Validación de nombre y apellidos
    const nombreRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,30}$/;
    if (!nombreRegex.test(nombreInput.value)) {
        alert('Por favor, introduce un nombre válido.');
        return false;
    }

    const apellidosRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,60}$/;
    if (!apellidosRegex.test(apellidosInput.value)) {
        alert('Por favor, introduce apellidos válidos.');
        return false;
    }

    //Validación de dirección y población
    const direccionRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s\d\-\.\,]{3,50}$/;
    if (!direccionRegex.test(direccionInput.value)) {
        alert('Por favor, introduce una dirección válida.');
        return false;
    }

    const poblacionRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,30}$/;
    if (!poblacionRegex.test(poblacionInput.value)) {
        alert('Por favor, introduce una población válida.');
        return false;
    }

    //Validación de código postal
    const codPostalRegex = /^\d{5}$/;
    if (!codPostalRegex.test(codPostalInput.value)) {
        alert('Por favor, introduce un código postal válido.');
        return false;
    }

    //Validación de teléfono fijo
    const telefonoRegex = /^\(\d{3}\)\d{3}-\d{3}$/;
    if (!telefonoRegex.test(telefonoInput.value)) {
        alert('Por favor, introduce un teléfono fijo válido.');
        return false;
    }

    //Validación de teléfono móvil
    const movilRegex = /^6\d{2}-\d{3}-\d{3}$/;
    if (!movilRegex.test(movilInput.value)) {
        alert('Por favor, introduce un teléfono móvil válido que empiece por 6.');
        return false;
    }

    //Validación de DNI
    const dniRegex = /^\d{2}\.\d{3}\.\d{3}-[A-Za-z]$/;
    if (!dniRegex.test(dniInput.value)) {
        alert('Por favor, introduce un DNI válido.');
        return false;
    }

    //Validación de cuenta corriente
    const cuentaCorrienteRegex = /^\d{4}-\d{4}-\d{2}-\d{10}$/;
    if (!cuentaCorrienteRegex.test(cuentaCorrienteInput.value)) {
        alert('Por favor, introduce un número de cuenta corriente válido.');
        return false;
    }

    //Validación de cuota mensual
    const cuotaMensualRegex = /^\d+(\.\d{1,2})?$/;
    if (!cuotaMensualRegex.test(cuotaMensualInput.value)) {
        alert('Por favor, introduce una cuota mensual válida.');
        return false;
    }

    //Validación de fecha de nacimiento
    const fechaNacimientoRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!fechaNacimientoRegex.test(fechaNacimientoInput.value)) {
        alert('Por favor, introduce una fecha de nacimiento válida.');
        return false;
    }

    //Validación de número de hijos
    const numHijosRegex = /^\d+$/;
    if (!numHijosRegex.test(numHijosInput.value)) {
        alert('Por favor, introduce un número de hijos válido.');
        return false;
    }

    //Validación de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        alert('Por favor, introduce una dirección de correo electrónico válida.');
        return false;
    }

    //Si supera cada validación, entonces devolvemos true
    return true;
}