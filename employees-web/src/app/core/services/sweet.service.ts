import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {MESSAGES} from '../core.constants';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor(private toastrService: ToastrService) {
  }

  confirm({message, title}: { message: string; title?: string; },
          request?: Function, scope?: any, cancel?: Function) {
    const titleMessage = (title) ? title : MESSAGES.sure;
    return Swal.fire({
      title: titleMessage,
      text: message,
      icon: 'question',
      confirmButtonColor: '#1ab394',
      showCancelButton: true,
      confirmButtonText: MESSAGES.confirmButtonText,
      cancelButtonText: MESSAGES.cancelButtonText,
      width: '478px',
      reverseButtons: true,
      showLoaderOnConfirm: true,
      allowOutsideClick: false,
      preConfirm: () => {
        if (request != null) {
          return new Promise((resolve, reject) => {
            request(scope, resolve);
          });
        }
      }
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.cancel) {
        if (cancel == null) {
          Swal.close();
        } else {
          cancel(scope);
        }
      }
    });
  }

  ok(message: string, title?: string): any {
    return Swal.fire({
      title: title,
      text: message,
      icon: 'success',
      confirmButtonColor: '#1ab394',
      showCancelButton: false,
      confirmButtonText: MESSAGES.readyButtonText,
      width: '478px',
      reverseButtons: true
    });
  }

  defaultOk(message: string, title?: string): any {
    return Swal.fire({
      title: title,
      text: message,
      icon: 'info',
      confirmButtonColor: '#1ab394',
      showCancelButton: false,
      confirmButtonText: 'Aceptar',
      width: '478px',
      reverseButtons: true
    });
  }

  success(): any {
    this.toastrService.success(MESSAGES.success);
  }

  close(): void {
    Swal.close();
  }
}
