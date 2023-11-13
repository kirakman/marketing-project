import { EventoModel } from './../Model/evento-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketingServiceService {

  private readonly API = 'http://localhost:8080/api/eventos';

  constructor(private httpClient: HttpClient) { }

  postEvento(evento: EventoModel): Observable<EventoModel> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<EventoModel>(this.API, evento, { headers });
  }


  getEvento(): Observable<EventoModel[]> {
    return this.httpClient.get<EventoModel[]>(this.API).pipe();
  }

  deleteEvento(id: number): Observable<void> {
    const url = `${this.API}/${id}`;
    return this.httpClient.delete<void>(url);
  }

  editEvento(evento: EventoModel): Observable<EventoModel> {
    const url = `${this.API}/${evento.id}`;
    return this.httpClient.put<EventoModel>(url, evento);
  }

  doisEditEvento(evento: EventoModel): Observable<EventoModel> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.put<EventoModel>(this.API, evento, { headers });
  }

}
