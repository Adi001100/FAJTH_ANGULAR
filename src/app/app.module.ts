import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from "./app-routing.module";
import {FooterComponent} from "./components/footer/footer.component";
import {BeatGuessComponent} from "./components/beat-guess/beat-guess.component";
import {BookingComponent} from "./components/booking/booking.component";
import {PressComponent} from "./components/press/press.component";
import {RecommenderComponent} from "./components/recommender/recommender.component";
import {HamburgerMenuComponent} from "./components/hamburger-menu/hamburger-menu.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    BeatGuessComponent,
    BookingComponent,
    PressComponent,
    RecommenderComponent,
    HamburgerMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN',
    }),
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
