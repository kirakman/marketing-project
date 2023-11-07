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

  listAllEvents(): Observable<CardsInfoData[]> {
    return this.httpClient.get<CardsInfoData[]>(this.API).pipe(
      first(),
      delay(800),
    );
  }

  postEvento(evento: EventoModel): Observable<EventoModel> {
    return this.httpClient.post<EventoModel>(this.API, evento);
  }

  getEvento(): Observable<CardsInfoData[]> {
    return this.httpClient.get<CardsInfoData[]>(this.API);
  }

}
