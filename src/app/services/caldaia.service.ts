import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Caldaia } from '../models/caldaia';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CaldaiaService {

  private url = "Caldaie"
  constructor(private http : HttpClient) { }

  public getCaldaie() : Observable<Caldaia[]>{
    return this.http.get<Caldaia[]>(`${environment.apiUrl}/${this.url}`)
  }

  public updateCaldaie(caldaia : Caldaia) : Observable<Caldaia[]>{
    return this.http.put<Caldaia[]>(`${environment.apiUrl}/${this.url}`, caldaia)
  }

  public createCaldaie(caldaia : Caldaia) : Observable<Caldaia[]>{
    return this.http.post<Caldaia[]>(`${environment.apiUrl}/${this.url}`, caldaia)
  }

  public deleteCaldaie(caldaia : Caldaia) : Observable<Caldaia[]>{
    return this.http.delete<Caldaia[]>(`${environment.apiUrl}/${this.url}/${caldaia.id}`)
  }
}
