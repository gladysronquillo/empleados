import { NgbModalOptions } from "@ng-bootstrap/ng-bootstrap";

export const NOTIFY_TIME = 3000;

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