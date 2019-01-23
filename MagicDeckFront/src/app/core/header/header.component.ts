import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { faHome, faIdCard, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/index';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = 'Magic Deck Builder';
  faHome = faHome;
  faCard = faIdCard;
  faSignIn = faSignInAlt;
  faUserPlus = faUserPlus;
  logedIn = false;

  constructor(private actvRoot: ActivatedRoute, private userSvc: UserService, private router: Router) {
        router.events.subscribe((val) => {
          if (val) {
            if (this.userSvc.currentUserValue) {
              this.logedIn = true;
            } else {
              this.logedIn = false;
            }
          }
      });
   }
  onSearchChange(event) {
    console.log('event', event.target.value);
    if (event.target.value) {
      // TODO : call api (database) to get card "where name LIKE '%event.target.value'"
    }
  }
  logOut() {
    this.userSvc.logout();
    location.reload(true);
  }
}
