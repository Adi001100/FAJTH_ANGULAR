import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {BeatGuessComponent} from "./components/beat-guess/beat-guess.component";
import {BookingComponent} from "./components/booking/booking.component";
import {PressComponent} from "./components/press/press.component";
import {RecommenderComponent} from "./components/recommender/recommender.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'beatguess', component: BeatGuessComponent},
  {path: 'booking', component: BookingComponent},
  {path: 'press', component: PressComponent},
  {path: 'recommender', component: RecommenderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
