import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Inject} from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CardsInfoData } from 'src/app/Model/cards-model';
import { EventoModel } from 'src/app/Model/evento-model';
import { MarketingServiceService } from 'src/app/service/marketing-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-module',
  templateUrl: './edit-module.component.html',
  styleUrls: ['./edit-module.component.css']
})
export class EditModuleComponent implements OnInit {

eventoProp: EventoModel = new EventoModel();
card: any = EventoModel;


 constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: { card: EventoModel }, public dialogRef: MatDialogRef<EditModuleComponent>, private service: MarketingServiceService, private router: Router) {}

 closeDialog(): void {
  this.dialogRef.close();
}

saveEvent() {
  const evento: EventoModel = {
    nome: this.eventoProp.nome,
    descricao: this.eventoProp.descricao,
    img: this.eventoProp.img,
    url: this.eventoProp.url
  };
  this.service.doisEditEvento(evento);
}

  ngOnInit() {
    this.card = this.data.card;
  }

}
