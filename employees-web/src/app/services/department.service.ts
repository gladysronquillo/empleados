import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Department } from '../models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private httpClient: HttpClient) {
  }

  list() {
    return this.httpClient.get(`${environment.baseUrl}/department/listAll`);
  }

  save(department: Department) {
    return this.httpClient.post(`${environment.baseUrl}/department/save`, department);
  }

}
