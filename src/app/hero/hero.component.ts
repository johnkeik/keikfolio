import { Component, output } from '@angular/core';
import { ActivePage } from '../models/active-page.enum';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  goToSection = output<ActivePage>();

  contactClick() {
    this.goToSection.emit(ActivePage.contact);
  }
}
