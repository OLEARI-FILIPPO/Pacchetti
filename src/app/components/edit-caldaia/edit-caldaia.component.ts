import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Caldaia } from 'src/app/models/caldaia';
import { CaldaiaService } from 'src/app/services/caldaia.service';

@Component({
  selector: 'app-edit-caldaia',
  templateUrl: './edit-caldaia.component.html',
  styleUrls: ['./edit-caldaia.component.css']
})
export class EditCaldaiaComponent implements OnInit{

  @Input() caldaia?: Caldaia
  @Output() caldaiaUpdated = new EventEmitter<Caldaia[]>();

  constructor(private caldaiaService: CaldaiaService){}

  ngOnInit(): void{ }

  createPacchetto(caldaia: Caldaia){
    this.caldaiaService.createCaldaie(caldaia)
    .subscribe((caldaie: Caldaia[]) => this.caldaiaUpdated.emit(caldaie))
  }

  updatePacchetto(caldaia: Caldaia){
    this.caldaiaService.updateCaldaie(caldaia)
      .subscribe((caldaie: Caldaia[]) => this.caldaiaUpdated.emit(caldaie))
  }

  deletePacchetto(caldaia: Caldaia){
    this.caldaiaService.deleteCaldaie(caldaia)
      .subscribe((caldaie: Caldaia[]) => this.caldaiaUpdated.emit(caldaie))
  }

}
