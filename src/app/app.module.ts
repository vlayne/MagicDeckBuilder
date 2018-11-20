import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '../../node_modules/@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserDecksComponent } from './user-decks/user-decks.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardsService } from './services/cards-service.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { TypesService } from './services/types-service.component';
// import { SassHelperComponent } from './services/sass-helper/sass-helper.component';
import { CardsListComponent } from './cards-list/cards-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'user-decks', component: UserDecksComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    UserDecksComponent,
    // SassHelperComponent,
    CardsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule
  ],
  providers: [
    CardsService,
    TypesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
