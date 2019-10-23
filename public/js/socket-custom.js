
var socket = io();

//Escuchar
socket.on('connect', function () {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function () {
    console.log('Perdimos conexión con el servidor');
});

//Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola Mundo'
}, function (resp) {
    console.log('Respuesta Server ', resp);
});

//Recibir información
socket.on('enviarMensaje', function (mensaje) {
    console.log('Servidor', mensaje);
});

