import { Component } from '@angular/core';
import { Pacchetto } from './models/pacchetto';
import { PacchettoService } from './services/pacchetto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StripeShop';
  pacchetti: Pacchetto[] = []
  pacchettoToEdit?: Pacchetto

  constructor(private pacchettoService: PacchettoService){  }

  ngOnInit(): void{
    //this.pacchetti = this.pacchettoService.getPacchetti();
    this.pacchettoService.getPacchetti()
    .subscribe((result: Pacchetto[]) => (this.pacchetti = result))

    console.log(this.pacchetti)
  }

  initNewPacchetto(){
    this.pacchettoToEdit = new Pacchetto();
  }

  editPacchetto(pacchetto: Pacchetto){
    this.pacchettoToEdit = pacchetto
  }
}
