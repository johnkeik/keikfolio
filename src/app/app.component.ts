import { AfterViewInit, Component, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { HeroComponent } from './hero/hero.component';
import { ActivePage } from './models/active-page.enum';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import gsap from 'gsap';
import { LayoutGsapAnimationsService } from './shared/services/layout-gsap-animations-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PortfolioComponent,
    ContactComponent,
    ExperienceComponent,
    HeaderComponent,
    SkillsComponent,
    HeroComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  animationsService = inject(LayoutGsapAnimationsService);
  title = 'ikcv';
  @ViewChild('aboutSection') aboutSection!: ElementRef;
  @ViewChild('portfolioSection') portfolioSection!: ElementRef;
  @ViewChild('contactSection') contactSection!: ElementRef;

  activeSection = signal<ActivePage>(ActivePage.about);

  searchQuery: string = '';
  searchResults: string[] = [];
  private searchSubject = new Subject<string>();
  constructor(private elementRef: ElementRef){}
  ngAfterViewInit(): void {
    this.animationsService.initGsapAnimations();
  }
  goToSection(section: ActivePage) {
    let contactElement;

    switch (section) {
      case ActivePage.about: {
        contactElement = document.querySelector('app-hero');
        break;
      }
      case ActivePage.portfolio: {
        contactElement = document.querySelector('app-portfolio');
        break;
      }
      case ActivePage.contact: {
        contactElement = document.querySelector('app-contact');
        break;
      }
    }

    if (contactElement) {
      const yOffset = -50; // Adjust the offset as needed (negative moves it up)
      const y =
        contactElement.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
      this.activeSection.set(section)
    }
  }

  handleContactClick() {
    const contactElement = document.querySelector('app-contact');

    if (contactElement) {
      const yOffset = -50; // Adjust the offset as needed (negative moves it up)
      const y =
        contactElement.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  scrollToElement(result: string): void {
    // Close the dropdown
    this.searchResults = [];

    // Find the element containing the result text
    const elements = this.elementRef.nativeElement.querySelectorAll('*');
    let targetElement: HTMLElement | null = null;

    elements.forEach((element: HTMLElement) => {
      if (element.textContent && element.textContent.includes(result)) {
        targetElement = element as HTMLElement;
      }
    });

    if (targetElement) {
      // Scroll to the target element
      (targetElement as HTMLElement).scrollIntoView({ behavior: 'smooth' });
    }
  }
}
