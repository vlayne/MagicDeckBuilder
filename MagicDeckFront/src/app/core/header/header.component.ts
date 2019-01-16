import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faHome, faIdCard, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'The Magic Library';
  faHome = faHome;
  faCard = faIdCard;
  faSignIn = faSignInAlt;
  faUserPlus = faUserPlus;
  logedIn = false;
  constructor(private actvRoot: ActivatedRoute) { }

  // TODO : Handle logedIn boolean with user (token)
  ngOnInit() {

  }
  onSearchChange(event) {
    console.log('event', event.target.value);
    if(event.target.value){
      // TODO : call api (database) to get card "where name LIKE '%event.target.value'"
    }
  }
}
