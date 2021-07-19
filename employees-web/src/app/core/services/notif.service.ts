import {Injectable} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {NOTIFY_TIME} from '../core.constants';

@Injectable({
  providedIn: 'root'
})
export class NotifService {
  options = {
    timeOut: NOTIFY_TIME,
    closeButton: true,
    messageClass: 'toast-title',
    tapToDismiss: false,
    enableHtml: true
  };

  constructor(private _toastr: ToastrService) {}

  info(message: string) {
    this._toastr.info(message, '', this.options);
  }

  success(message: string) {
    this._toastr.success(message, '', this.options);
  }

  danger(message: string, timeOut?: number) {
    if (timeOut) {
      this.options.timeOut = timeOut;
    }
    this._toastr.error(message, '', this.options);
  }

  warning(message: string) {
    this._toastr.warning(message, '', this.options);
  }

  closeAll() {
    this._toastr.clear();
  }
}
