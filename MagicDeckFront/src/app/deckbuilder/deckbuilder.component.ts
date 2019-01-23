import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { CardModel, DeckModel } from '../models';
import { CardsService, PagerService } from '../services/index';
import { DeckService } from '../services/index';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * @title Drag&Drop connected sorting
 */
@Component({
  selector: 'app-deckbuilder',
  templateUrl: 'deckbuilder.component.html',
  styleUrls: ['deckbuilder.component.scss'],
})
export class DeckBuilderComponent implements OnInit {
  cards: CardModel[];
  cardsSelected: CardModel[] = [];
  deck: any [];
  colors = [
    {value: 'G', label: 'Forêt'},
    {value: 'R', label: 'Montagne'},
    {value: 'U', label: 'Île'},
    {value: 'W', label: 'Plaine'},
    {value: 'B', label: 'Marais'}
  ];
  colorSelected = 'Forêt';
  totalCards = [];
  pager: any = {};

  constructor(private cardsSvc: CardsService, private deckSvc: DeckService,
    private pagerService: PagerService, private sanitizer: DomSanitizer) {}
  ngOnInit() {
    this.colorsFilter(this.colors[0].value);
  }
  onColorChange(color) {
    this.colorsFilter(color);
  }
  colorsFilter(color) {
    this.cardsSvc.getCardsByColor(color).subscribe(data => {
      this.cards = data;
      this.totalCards = data;
      this.setPage(1);
    });
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  setPage(page: number) {
      console.log(this.cards.length);
      this.pager = this.pagerService.getPager(this.totalCards.length, page, 20);
      this.cards = this.totalCards.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
  onSubmit() {
    console.log('cardsSelected', this.cardsSelected);
    if (this.cardsSelected.length > 0) {
      this.cardsSelected.forEach(card => {
        this.deck.push(card.id);
      });
      console.log('deck', this.deck);
      this.deckSvc.createDeck(this.deck, localStorage.getItem('currentUser')['id']).subscribe(data => {
          console.log('data', data);
        });
    } else {
      console.log('nop');
    }
  }
}
