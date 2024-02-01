/* Tooltips */
var tooltipTriggerList = document.querySelectorAll(
	'[data-bs-toggle="tooltip"]'
);
var tooltipList = [...tooltipTriggerList].map(
	(tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

/* Popover */
const popoverTriggerList = document.querySelectorAll(
	'[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
	(popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

/* Al hacer click en enviarCorreo nos aparecera un alert */

$("#enviarCorreo").click(function (e) {
	e.preventDefault();
	alert("El correo fue enviado correctamente...");
});

/* Hacemos desaparecer una tarjeta */

$(".banish-btn").click(function () {
	$(".banish").hide();
});

/* uso de toggle */
$("#toggleCards").click(function () {
	$(".card-group").toggle();
});

/* Modal extendido */
/*  Quiero que al apretar si salga el mensaje en una alerta: "Aprender es entretenido" */
/*  Quiero que al apretar no salga el mensaje en una alerta: "Tabla!!" */
