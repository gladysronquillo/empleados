import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-help-block',
	template: '<small class="text-danger">{{message}}</small>'
})
export class HelpblockComponent {

	@Input() message = 'success';

	constructor() {}
}
