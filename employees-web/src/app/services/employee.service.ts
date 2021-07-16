import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Autor} from '../interfaces/autor';

@Injectable({
  providedIn: 'root'
})
export class AutorService {
  API_ENDPOINT = 'http://192.168.99.100:8090/api';

  constructor(private httpClient: HttpClient) {
  }

  get() {
    return this.httpClient.get(this.API_ENDPOINT + '/autor');
  }

  save(autor: Autor) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/autor', autor, {headers: headers});
  }

  put(autor) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.put(this.API_ENDPOINT + '/autor/' + autor.idautor, autor, {headers: headers});
  }

  delete(idautor) {
    return this.httpClient.delete(this.API_ENDPOINT + '/autor/' + idautor);
  }
}
