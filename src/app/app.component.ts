import { Component, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { HeroComponent } from './hero/hero.component';
import { ActivePage } from './models/active-page.enum';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

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
export class AppComponent implements OnInit {
  title = 'ikcv';
  @ViewChild('aboutSection') aboutSection!: ElementRef;
  @ViewChild('portfolioSection') portfolioSection!: ElementRef;
  @ViewChild('contactSection') contactSection!: ElementRef;

  activeSection = signal<ActivePage>(ActivePage.about);

  searchQuery: string = '';
  searchResults: string[] = [];
  private searchSubject = new Subject<string>();
  constructor(private elementRef: ElementRef){}
  ngOnInit(): void {
    this.searchSubject
      .pipe(
        debounceTime(3000), // Debounce for 3 seconds
        distinctUntilChanged()
      )
      .subscribe((searchValue) => {
        this.searchQuery = searchValue;
        this.searchPage();
      });

    setTimeout(() => {
      this.searchSubject.next('react');
    },5000)
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


  onSearch(searchValue: string): void {
    this.searchSubject.next(searchValue);
  }

  // Function to search the DOM
  searchPage() {
    this.searchResults = this.searchDOM(this.searchQuery);
    console.log(this.searchResults);
  }


  searchDOM(query: string): string[] {
    const results: Set<string> = new Set(); // Use Set to remove duplicates
    const elements = this.elementRef.nativeElement.querySelectorAll('*');

    elements.forEach((element: { textContent: string; }) => {
      if (element.textContent) {
        const text = element.textContent.toLowerCase();
        const queryIndex = text.indexOf(query.toLowerCase());

        if (queryIndex !== -1) {
          const start = Math.max(0, queryIndex - 10);
          const end = Math.min(text.length, queryIndex + query.length + 10);

          const result = text.substring(start, end);
          results.add(result); // Add to Set
        }
      }
    });

    return Array.from(results); // Convert Set back to array
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
