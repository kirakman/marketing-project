// TS
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MarketingServiceService } from '../service/marketing-service.service';
import { FormBuilder } from '@angular/forms';
import { EventoModel } from '../Model/evento-model';

@Component({
  selector: 'app-register-event',
  templateUrl: './register-event.component.html',
  styleUrls: ['./register-event.component.css']
})
export class RegisterEventComponent {

  eventoProp: EventoModel = new EventoModel();

  constructor(private router: Router, private service: MarketingServiceService, private formBuilder: FormBuilder) {}

  saveEvent() {
    const evento: EventoModel = {
      nome: this.eventoProp.nome,
      descricao: this.eventoProp.descricao,
      img: this.eventoProp.img,
      urlEvento: this.eventoProp.urlEvento
    };
    this.service.postEvento(evento).subscribe((result) => {
      console.log('Evento salvo:', result);
      this.router.navigate(['dashboard']);
    });
  }
}
