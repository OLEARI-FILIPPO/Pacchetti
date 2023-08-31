import { Component, Input } from '@angular/core';
import { Pacchetto } from 'src/app/models/pacchetto';

@Component({
  selector: 'app-edit-pacchetto',
  templateUrl: './edit-pacchetto.component.html',
  styleUrls: ['./edit-pacchetto.component.css']
})
export class EditPacchettoComponent {

  @Input() pacchetto?: Pacchetto

  constructor(){}

  ngOnInit(): void{

  }

  createPacchetto(pacchetto: Pacchetto){

  }

  updatePacchetto(pacchetto: Pacchetto){
    
  }

  deletePacchetto(pacchetto: Pacchetto){
    
  }

}
