import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { CardModel, DeckModel } from '../core/models';
import { CardsService } from '../services/index';


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
  deck: DeckModel = new DeckModel();

  constructor(private cardsSvc: CardsService) {}
  ngOnInit() {
    this.cardsSvc.getAllCards().subscribe(data => {
      this.cards = data;
    });
  }
  drop(event: CdkDragDrop<string[]>) {
    console.log('event', event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}