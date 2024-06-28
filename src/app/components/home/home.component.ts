import { Component, HostListener } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isPVisible = false;
  showButton = false;
  screenWidth!: number;

  constructor() {
    this.onResize();
  }

  ngOnInit(): void {
    const video = document.getElementById("myVideo") as HTMLVideoElement;

    video.currentTime = 37;

    video.addEventListener("ended", () => {
      video.currentTime = 37;
      video.play();
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: Event) {
    this.screenWidth = window.innerWidth;
    this.checkScreenWidth();
  }

  checkScreenWidth() {
    if (this.screenWidth <= 770) {
      this.showButton = true;
      this.isPVisible = false;
    } else {
      this.showButton = false;
      this.isPVisible = true;
    }
  }

  toggleParagraph() {
    this.isPVisible = !this.isPVisible;
  }
}
