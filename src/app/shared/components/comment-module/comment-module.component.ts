import { Component, Inject, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CardsInfoData, MOCK_CARDS_INFO } from 'src/app/Model/cards-model';

@Component({
  selector: 'app-comment-module',
  templateUrl: './comment-module.component.html',
  styleUrls: ['./comment-module.component.css']
})
export class CommentModuleComponent implements OnInit {

  card: any=  CardsInfoData;
  cardsInfo: CardsInfoData[] = MOCK_CARDS_INFO;

  // longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  // from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  // originally bred for hunting.`;

  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: { card: CardsInfoData }, public dialogRef: MatDialogRef<CommentModuleComponent>) { }

  closeDialog(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.card = this.data.card;
  }

}
