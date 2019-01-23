import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '../../node_modules/@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { DeckBuilderComponent } from './deckbuilder/deckbuilder.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardsService, TypesService, PagerService, AuthGuard, DeckService } from './services/index';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '../../node_modules/@angular/common/http';
// import { SassHelperComponent } from './services/sass-helper/sass-helper.component';
import { PagerComponent } from './core/pager/pager.component';
import { AlertComponent } from './core/alert/alert.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { JwtInterceptor } from './core/helper/jwt-interceptor';
import { ErrorCatcher } from './core/helper/error-catcher';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatSelectModule} from '@angular/material/select';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'sign-in', component: SignInComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'deck-builder', component: DeckBuilderComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: '' }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    // SassHelperComponent,
    PagerComponent,
    AlertComponent,
    SignInComponent,
    SignUpComponent,
    DeckBuilderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule,
    DragDropModule,
    MatSelectModule
  ],
  providers: [
    CardsService,
    TypesService,
    PagerService,
    DeckService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorCatcher, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
