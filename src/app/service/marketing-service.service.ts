import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CardsInfoData } from '../Model/cards-model';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketingServiceService {



  private readonly API = './assets/events.json';

  constructor(private httpClient: HttpClient) { }

  listAllEvents() {
    return this.httpClient.get<CardsInfoData[]>(this.API).pipe(
      first(),
      delay(800),
      tap(eventos => console.log(eventos))
    );
  }
}
