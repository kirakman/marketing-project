import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { Inject} from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CardsInfoData, MOCK_CARDS_INFO } from 'src/app/Model/cards-model';


@Component({
  selector: 'app-edit-module',
  templateUrl: './edit-module.component.html',
  styleUrls: ['./edit-module.component.css']
})
export class EditModuleComponent implements OnInit {

card: any=  CardsInfoData;
cardsInfo: CardsInfoData[] = MOCK_CARDS_INFO;

 constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: { card: CardsInfoData }, public dialogRef: MatDialogRef<EditModuleComponent>) {}

 closeDialog(): void {
  this.dialogRef.close();
}

  ngOnInit() {
    this.card = this.data.card;
  }

}
