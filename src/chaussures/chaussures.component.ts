import { Component, OnInit } from '@angular/core';
import { Chaussures } from '../models/chaussures';
import { ChaussuresService } from '../services/chaussures.service';

@Component({
  selector: 'app-chaussures',
  templateUrl: './chaussures.component.html',
  styleUrls: ['./chaussures.component.scss']
})
export class ChaussuresComponent implements OnInit {

  maListeDeChaussures:Chaussures [] = new Array(); 

  constructor(private srv:ChaussuresService) { }

  ngOnInit() {
    
    this.srv.affichertoutesLesChaussures().subscribe(liste=>this.maListeDeChaussures = liste); 
  }

}
