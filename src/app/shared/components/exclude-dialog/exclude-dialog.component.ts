import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MarketingServiceService } from 'src/app/service/marketing-service.service';
import { EventoModel } from 'src/app/Model/evento-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exclude-dialog',
  templateUrl: './exclude-dialog.component.html',
  styleUrls: ['./exclude-dialog.component.css']
})
export class ExcludeDialogComponent implements OnInit{

  eventos: EventoModel[] = [];

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<ExcludeDialogComponent>, private marketingService: MarketingServiceService, @Inject(MAT_DIALOG_DATA)public data: { card: EventoModel }, private router: Router) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ExcludeDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

openDialogExclude(card: EventoModel) {
  this.router.navigate(['dashboard']);
  if (card && card._id) {
    this.marketingService.deleteEvento(card).subscribe(
      () => {
        console.log('Evento excluído com sucesso');
      },
      (error) => {
        console.error('Erro ao excluir o evento', error);
      }
    );
  } else {
    console.error('ID do evento não definido');
  }
  this.dialogRef.close();
}

  ngOnInit(): void {
    this.marketingService.getEvento().subscribe(data => {
      this.eventos = data;
    });
  }

}
