import {Injectable} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NOTIFY_TIME } from '../base-constants';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  options = {
    timeOut: NOTIFY_TIME,
    closeButton: true,
    progressBar: true
  };

  constructor(private toastr: ToastrService) {
  }

  success(message: string, title: string = ''): any {
    this.toastr.success(
      message,
      title,
      this.options
    );
  }

  warning(message: string, title: string = ''): any {
    this.toastr.warning(
      message,
      title,
      this.options
    );
  }

  info(message: string, title: string = ''): any {
    this.toastr.info(
      message,
      title,
      this.options
    );
  }

  error(message: string, title: string = ''): any {
    this.toastr.error(
      message,
      title,
      this.options
    );
  }
}
