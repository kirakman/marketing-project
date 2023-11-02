import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CardsInfoData, MOCK_CARDS_INFO } from '../Model/cards-model';

@Injectable({
  providedIn: 'root'
})
export class MarketingServiceService {

cardsInfo: CardsInfoData[] = MOCK_CARDS_INFO;

constructor(httpClient: HttpClient) { }

}
