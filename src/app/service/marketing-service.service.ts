// Service
import { EventoModel } from './../Model/evento-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CardsInfoData } from '../Model/cards-model';
import { delay, first, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketingServiceService {

  private readonly API = 'http://localhost:8080/api/eventos';

  constructor(private httpClient: HttpClient) { }

  postEvento(evento: EventoModel): Observable<EventoModel> {
    return this.httpClient.post<EventoModel>(this.API, evento);
  }

  getEvento(): Observable<EventoModel[]> {
    return this.httpClient.get<EventoModel[]>(this.API).pipe();
  }

  deleteEvento(id: number): Observable<void> {
    const url = `${this.API}/${id}`;
    return this.httpClient.delete<void>(url);
  }

  editEvento(id: number, evento: EventoModel): Observable<EventoModel> {
    const url = `${this.API}/${id}`;
    return this.httpClient.put<EventoModel>(url, evento);
  }
}
