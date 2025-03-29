import {
  Component,
  HostListener,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HamburgerComponent } from '../hamburger/hamburger.component';
import { ActivePage } from '../models/active-page.enum';
import { ScrollHandlerService } from '../shared/services/scroll-handler.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HamburgerComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  scrollHandlerService = inject(ScrollHandlerService);

  activeSection = input.required<ActivePage>();

  activePageType = ActivePage;

  private previousScrollPosition = window.scrollY;
  visibleMenu = false;
  activeLang = 'en';

  goToSection = output<ActivePage>();
  searchValue = output<string>();

  @HostListener('window:scroll', [])
  onWindowScroll() {
    console.log('manual scrolling before', this.scrollHandlerService.isNavBarVisible());
    if(this.scrollHandlerService.manualScrolling()) {
      console.log('manual scrolling', this.scrollHandlerService.isNavBarVisible());
      this.scrollHandlerService.setIsNavBarVisible(false);
      return;
    }
    const currentScrollPosition = window.scrollY;
    if (currentScrollPosition > this.previousScrollPosition) {
      // Scrolling down
      this.scrollHandlerService.setIsNavBarVisible(false);
    } else {
      // Scrolling up
      this.scrollHandlerService.setIsNavBarVisible(true);
    }
    this.previousScrollPosition = currentScrollPosition;
  }

  handleInput(value: string){
    this.searchValue.emit(value)
  }
  setActive(section: ActivePage){
    this.toggleMenu(true);
    this.goToSection.emit(section)
  }
  toggleMenu(close?: boolean) {
    this.visibleMenu = close ? false : !this.visibleMenu;
    if (this.visibleMenu) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = ''; 
    }
  }
}
