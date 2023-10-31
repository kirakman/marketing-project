import { Component, OnInit } from '@angular/core';
import { CardsInfoData, MOCK_CARDS_INFO } from '../Model/cards-model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

cardsInfo: CardsInfoData[] = MOCK_CARDS_INFO;

cardsVar: CardsInfoData = {
  img: '',
  title: '',
  subtitle: '',
  url: '',
};

isFavorite: boolean = false;

toggleFavoriteColor() {
  this.isFavorite = !this.isFavorite;
}

shareUrl(url: string) {
  if (url) {
    window.open(url, '_blank');
  }
}

constructor(){}

ngOnInit(): void {

}
}
