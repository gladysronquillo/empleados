import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Employee} from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) {
  }

  list() {
    return this.httpClient.get(`${environment.baseUrl}/employee/listAll`);
  }

  findForSelector() {
    return this.httpClient.get(`${environment.baseUrl}/employee/findForSelector`);
  }

  delete(id: number) {
    return this.httpClient.get(`${environment.baseUrl}/employee/delete/` + id);
  }

  save(employee: Employee) {
    return this.httpClient.post(`${environment.baseUrl}/employee/save`, employee);
  }

}
