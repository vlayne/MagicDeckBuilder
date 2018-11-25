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
import { CardsService,TypesService, PagerService } from './services/index';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
// import { SassHelperComponent } from './services/sass-helper/sass-helper.component';
import { PagerComponent } from './pager/pager.component';

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
    PagerComponent
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
    TypesService,
    PagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
