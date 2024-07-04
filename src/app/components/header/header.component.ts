import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() configType: 'home' | 'beatGuess' | 'recommender' | 'press' | 'booking' = 'home';

  isHome: boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (this.router.url === "/home"){
        this.isHome = true
      }
    });
  }
}
