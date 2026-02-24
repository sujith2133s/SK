import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'SK Insurance Advisory';
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    const menu = document.getElementById('navMenu');
    const ham = document.getElementById('hamburger');
    if (menu) menu.classList.toggle('open', this.menuOpen);
    if (ham) ham.classList.toggle('open', this.menuOpen);
  }
}
