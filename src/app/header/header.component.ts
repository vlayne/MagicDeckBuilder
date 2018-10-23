import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faHome, faIdCard } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'The Magic Library';
  faHome = faHome;
  faCard = faIdCard;
  constructor(private actvRoot: ActivatedRoute) { }

  ngOnInit() {

  }

}
