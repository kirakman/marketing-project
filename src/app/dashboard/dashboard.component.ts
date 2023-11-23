import { Component, OnInit } from '@angular/core';
import { MarketingServiceService } from '../service/marketing-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../shared/components/error-dialog/error-dialog.component';
import { ExcludeDialogComponent } from '../shared/components/exclude-dialog/exclude-dialog.component';
import { EditModuleComponent } from '../shared/components/edit-module/edit-module.component';
import { CommentModuleComponent } from '../shared/components/comment-module/comment-module.component';
import { EventoModel } from '../Model/evento-model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

eventos: EventoModel[] = [];

toggleFavoriteColor(card: EventoModel) {
  card.isFavorite = !card.isFavorite;
}

shareUrl(card: any) {
  if (card) {
    window.open(card, '_blank');
  }
}

constructor(private marketingService: MarketingServiceService, public dialog: MatDialog) {}

onError(errorMsg: string){
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
  });
}

openDialogExclude(card: EventoModel){
  const dialogRef = this.dialog.open(ExcludeDialogComponent, {
    data: { card },
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}


openDialogEdit(card: EventoModel) {
  const dialogRef = this.dialog.open(EditModuleComponent, {
    data: { card },
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

commentDialog(card: EventoModel){
  const dialogRef = this.dialog.open(CommentModuleComponent, {
    data: { card },
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

limitText(text: string, maxLength: number): string {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  } else {
    return text;
  }
}

ngOnInit(): void {
  this.marketingService.getEvento().subscribe(data => {
    this.eventos = data;
  });
}
}
