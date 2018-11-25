import { Component, OnInit, Input } from '@angular/core';
import { PagerService } from '../services/index'
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-pager',
    styleUrls: ['pager.component.scss'],
    templateUrl: 'pager.component.html'
})

export class PagerComponent implements OnInit {
    constructor(private http: HttpClient, private pagerService: PagerService, private sanitizer: DomSanitizer) { }

    @Input() elementCardText: string;
    // array of all items to be paged
    @Input() listCards: any[];

    // pager object
    pager: any = {};

    // paged items
    listCurrentCards: any[];

    ngOnInit() {
      this.setPage(1);
    }
    getImageSecured(imageUrl) {
      return this.sanitizer.bypassSecurityTrustStyle(`url(${imageUrl})`);
    }
    setPage(page: number) {
        // get pager object from service
        this.pager = this.pagerService.getPager(this.listCards.length, page);

        // get current page of items
        this.listCurrentCards = this.listCards.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
}