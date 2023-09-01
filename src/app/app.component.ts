import { Component } from '@angular/core';
import { Pacchetto } from './models/pacchetto';
import { PacchettoService } from './services/pacchetto.service';
import { Caldaia } from './models/caldaia';
import { CaldaiaService } from './services/caldaia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StripeShop';
  pacchetti: Pacchetto[] = []
  pacchettoToEdit?: Pacchetto

  caldaie: Caldaia[] = []
  caldaiaToEdit?: Caldaia

  constructor(private pacchettoService: PacchettoService, private caldaiaService: CaldaiaService){  }

  ngOnInit(): void{
    //this.pacchetti = this.pacchettoService.getPacchetti();
    //this.pacchettoService.getPacchetti()
    //.subscribe((result: Pacchetto[]) => (this.pacchetti = result))

    this.caldaiaService.getCaldaie()
    .subscribe((result: Caldaia[]) => (this.caldaie = result))

    console.log(this.caldaie)
  }

  initNewPacchetto(){
    this.pacchettoToEdit = new Pacchetto();
  }

  editPacchetto(pacchetto: Pacchetto){
    this.pacchettoToEdit = pacchetto
  }

  initNewCaldaia(){
    this.caldaiaToEdit = new Caldaia();
  }

  editCaldaia(caldaia: Caldaia){
    this.caldaiaToEdit = caldaia
  }

  updateCaldaieList(caldaie: Caldaia[]){
    this.caldaie = caldaie
  }
}
