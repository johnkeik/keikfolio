import {
  Component,
  HostListener,
  input,
  output,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HamburgerComponent } from '../hamburger/hamburger.component';
import { ActivePage } from '../models/active-page.enum';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HamburgerComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  activeSection = input.required<ActivePage>();

  activePageType = ActivePage;
  isNavbarVisible = true;
  private previousScrollPosition = window.scrollY;
  visibleMenu = false;
  activeLang = 'en';

  goToSection = output<ActivePage>();
  searchValue = output<string>();

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPosition = window.scrollY;
    if (currentScrollPosition > this.previousScrollPosition) {
      // Scrolling down
      this.isNavbarVisible = false;
    } else {
      // Scrolling up
      this.isNavbarVisible = true;
    }
    this.previousScrollPosition = currentScrollPosition;
  }

  handleInput(value: string){
    this.searchValue.emit(value)
  }
  setActive(section: ActivePage){
    this.toggleMenu();
    this.goToSection.emit(section)
  }
  toggleMenu() {
    this.visibleMenu = !this.visibleMenu;
    if (this.visibleMenu) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = ''; 
    }
  }
}
