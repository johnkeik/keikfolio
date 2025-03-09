import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { PortfolioProjectType } from '../portfolio.component';
import { SafeUrlPipe } from '../../shared/pipes/safe-url';
import { IconComponent } from "../../shared/pipes/icons/icon.component";
import { IconNameType } from '../../shared/pipes/icons/icon-name-type.enum';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe, IconComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  isCardFlipped = false;
  showModal = false;
  card = input.required<PortfolioProjectType>();
  iconNameType = IconNameType;

  flipCard() {
    this.isCardFlipped = !this.isCardFlipped;
    setTimeout(() => {
      this.showModal = true;
    },400)
  }

  closeModal() {
    this.showModal = false;
    this.isCardFlipped = false;
  }

  openLink(event: MouseEvent){
    event.preventDefault();

    console.log('test')
  }
}
