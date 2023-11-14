import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MarketingServiceService } from 'src/app/service/marketing-service.service';
import { EventoModel } from 'src/app/Model/evento-model';

@Component({
  selector: 'app-exclude-dialog',
  templateUrl: './exclude-dialog.component.html',
  styleUrls: ['./exclude-dialog.component.css']
})
export class ExcludeDialogComponent implements OnInit{

  eventos: EventoModel[] = [];

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<ExcludeDialogComponent>, private marketingService: MarketingServiceService, @Inject(MAT_DIALOG_DATA)public data: { cardId: number }) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ExcludeDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  // excludeForever(): void {
  //   const card = this.data;
  //   this.marketingService.deleteEvento().subscribe(() => {
  //     this.dialogRef.close(true);
  //   });
  // }

  ngOnInit(): void {
    this.marketingService.getEvento().subscribe(data => {
      this.eventos = data;
    });
  }

}
