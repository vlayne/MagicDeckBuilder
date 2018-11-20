import { Component, OnInit } from '@angular/core';
import { CardsService } from '../services/cards-service.component';
import { TypesService } from '../services/types-service.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  types: any;
  cardsByColor: any = [];
  fromHomeWidgetsToCards = false;
  constructor(private svcMagic: CardsService, private typeSvc: TypesService) { }

  ngOnInit() {
    this.types =  this.typeSvc.getHomeTypes();
    this.svcMagic.getCardsTypes().subscribe(type => {
    });
  }
  getCardsFromType(type) {
    this.svcMagic.getAllCards().subscribe(card => {
      this.cardsByColor = card.cards.filter(x => x.colorIdentity[0] === type.color);
      this.fromHomeWidgetsToCards = true;
      console.log('home widgets', this.cardsByColor);
    });
  }
}
