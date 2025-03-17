import { Component, AfterViewInit, output } from '@angular/core';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ActivePage } from '../models/active-page.enum';
gsap.registerPlugin(TextPlugin);

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements AfterViewInit {
  goToSection = output<ActivePage>();

  contactClick() {
    this.goToSection.emit(ActivePage.contact);
  }

  ngAfterViewInit() {
    this.createTypewriterAnimation();
  }

  createTypewriterAnimation() {
    const textElement = document.querySelector('.name');
    if (textElement) {
      const text = textElement.textContent;
      textElement.textContent = '';
      if(text){
        gsap.to('.name', {
          duration: text.length * 0.1,
          text: text,
          ease: 'none',
          delay: 0.5,
          repeat: -1,
          repeatDelay: 1,
          yoyo: true,
        });
      }

    }
  }
}
