import { Injectable } from '@angular/core';
import { Pacchetto } from '../models/pacchetto';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacchettoService {

  private url = "Pacchetti"
  constructor(private http : HttpClient) { }

  public getPacchetti() : Observable<Pacchetto[]>{
    return this.http.get<Pacchetto[]>(`${environment.apiUrl}/${this.url}`)
  }
}
