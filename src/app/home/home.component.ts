import { Component, OnInit } from '@angular/core';
import { CardsService } from '../services/cards-service.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private svcMagic: CardsService) { }

  ngOnInit() {
    console.log('home works');
    this.svcMagic.getCardsTypes().subscribe(type => {
      console.log(type);
    });
  }
}
