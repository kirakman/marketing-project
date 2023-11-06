import { Component, OnInit } from '@angular/core';
import { CardsInfoData, MOCK_CARDS_INFO } from '../Model/cards-model';
import { MarketingServiceService } from '../service/marketing-service.service';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../shared/components/error-dialog/error-dialog.component';
import { ExcludeDialogComponent } from '../shared/components/exclude-dialog/exclude-dialog.component';
import { EditModuleComponent } from '../shared/components/edit-module/edit-module.component';
import { CommentModuleComponent } from '../shared/components/comment-module/comment-module.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

cardsInfo: CardsInfoData[] = MOCK_CARDS_INFO;

listEvents$: Observable<CardsInfoData[]>;

// cardsVar: CardsInfoData = {
//   img: '',
//   title: '',
//   subtitle: '',
//   url: '',
// };

isFavorite: boolean = false;

toggleFavoriteColor() {
  this.isFavorite = !this.isFavorite;
}

shareUrl(url: string) {
  if (url) {
    window.open(url, '_blank');
  }
}

constructor(private marketingService: MarketingServiceService, public dialog: MatDialog) {

this.listEvents$ = this.marketingService.listAllEvents().pipe(catchError(error => {
    this.onError('Erro ao carregar Eventos.');
    return of ([])}
  ));
}

onError(errorMsg: string){
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
  });
}

openDialogExclude(enterAnimationDuration: string, exitAnimationDuration: string): void {
  this.dialog.open(ExcludeDialogComponent, {
    width: '250px',
    enterAnimationDuration,
    exitAnimationDuration,
  });
}

openDialogEdit(card: CardsInfoData) {
  const dialogRef = this.dialog.open(EditModuleComponent, {
    data: { card }, // Pass the card as data to the dialog
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

commentDialog(card: CardsInfoData){
  const dialogRef = this.dialog.open(CommentModuleComponent, {
    data: { card }, // Pass the card as data to the dialog
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

limitText(text: string, maxLength: number): string {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...'; // Adiciona '...' se o texto for truncado
  } else {
    return text;
  }
}

ngOnInit(): void {
}
}
