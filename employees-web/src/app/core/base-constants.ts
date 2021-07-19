import { NgbModalOptions } from "@ng-bootstrap/ng-bootstrap";

export const NOTIFY_TIME = 3000;

export const ERROR_MESSAGES = {
	required: 'Dato requerido.',
	min: 'Valor por debajo de la cantidad mínima.',
	max: 'Valor por encima de la cantidad máxima.',
	number: 'El valor debe ser numérico.',
	pattern: 'Formato inválido.',
	minlength: 'Longitud mínima no permitida.',
	ngbDate: 'Fecha inválida.',
	minValue: 'El valor debe ser mayor a {0}.',
	maxValue: 'El valor debe ser menor a {0}.',
	equalValue: 'El valor debe ser igual a {0}.',
	tableRequired: 'La tabla requiere un registro.',
	typeFile: 'El archivo {0} corresponde al/los tipo(s) no permitido(s) ({1}).',
	maxFileSize: 'El archivo {0} sobrepasa el tamaño permitido ({1} {2}).',
	maxFileQuantity: 'Se intenta superar el limite establecido de archivos permitidos ({0})',
	maxFilesSizeForMail: 'Los archivos adjuntos exceden el tamaño máximo permitido.',
	internalError: 'Ha ocurrido un error, por favor comunícate con el administrador.',
	cityNeeded: 'Ciudad requerida para esta dirección.',
	principalAccountNeeded: 'Se debe seleccionar una cuenta como principal.',
	minDate: 'La fecha ingresada no puede ser menor a la fecha anterior.',
	minDateToday: 'La fecha ingresada no puede ser menor a la actual.',
	maxDateToday: 'La fecha ingresada no puede ser mayor a la actual.',
	minDateIncidenceDate: 'La fecha ingresada no puede ser menor a la fecha de ocurrencia.',
	patternMail: 'Ingrese una dirección de correo válida.',
	movementAlreadyExists: 'Existen movimientos con fecha posterior a la fecha ingresada.',
	newValueMovement: 'Ingrese un valor diferente del valor asegurado actual.',
	liquidationNumberRepeated: 'No. Liquidación ya existe en reclamo {0}.',
	invalidEmail: 'Correo(s) inválido(s) ({0}).'
};

export const MESSAGES = {
	sure: '¿Estás seguro?',
	confirmation: 'Se guardará la información.',
	changeStatusConfirmation: 'Se cambiará el estado del registro seleccionado.',
	success: 'Información guardada exitosamente.',
	removeRecord: 'El registro ha sido eliminado',
	unauthorized: 'No autorizado.',
	expired: 'La sesión ha expirado.',
	readyButtonText: 'Listo',
	confirmButtonText: '¡Sí, aceptar!',
	cancelButtonText: '¡No, cancelar!',
	acceptButtonText: 'Aceptar',
	cancelSaveButtonText: '¡No, guardar!',
	notFoundMessage: 'Información no disponible...',
	generatingReport: 'El reporte se está generando...',
	generating: 'Generando...',
	reportReady: 'El reporte se ha generado, por favor revise sus descargas.'
};

export const SMALL_MODAL: NgbModalOptions = {
	backdrop: 'static',
	keyboard: false,
	centered: true,
	size: 'sm'
};

export const MEDIUM_MODAL: NgbModalOptions = {
	backdrop: 'static',
	keyboard: false,
	centered: true,
	size: 'lg'
};

export const LARGE_MODAL: NgbModalOptions = {
	backdrop: 'static',
	keyboard: false,
	centered: true,
	size: 'xl'
};