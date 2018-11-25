import { Component, OnInit } from '@angular/core';
import { CardsService } from '../services/cards.service';
import { TypesService } from '../services/types.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  types: any;
  cardsByColor: any = [];
  elementCardText: string; 
  fromHomeWidgetsToCards = false;
  constructor(private svcMagic: CardsService, private typeSvc: TypesService) { }

  ngOnInit() {
    this.types =  this.typeSvc.getHomeTypes();
    this.svcMagic.getCardsTypes().subscribe(type => {
    });
  }
  activateHomeLayout() {
    this.fromHomeWidgetsToCards = false;
  }
  getCardsFromType(type) {
    this.svcMagic.getAllCards().subscribe(card => {
      this.cardsByColor = card.cards.filter(x => x.colorIdentity[0] === type.color);
      this.fromHomeWidgetsToCards = true;
      if(!this.elementCardText && card.cards ){
        this.elementCardText = card.cards.find(x => x.colorIdentity[0] === type.color).colors[0];
      }
      console.log('home widgets', this.cardsByColor);
    });
  }
}
