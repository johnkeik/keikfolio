import { CommonModule } from '@angular/common';
import { Component, effect, input, output } from '@angular/core';
import { PortfolioProjectType } from '../portfolio.component';
import { SafeUrlPipe } from '../../shared/pipes/safe-url';
import { IconComponent } from "../../shared/pipes/icons/icon.component";
import { IconNameType } from '../../shared/pipes/icons/icon-name-type.enum';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  card = input.required<PortfolioProjectType>();
  modalOpen = input(false);

  openModal = output<PortfolioProjectType>();
  closeModal = output();

  isCardFlipped = false;

  constructor() {
    effect(() => {
      if(this.modalOpen()){
        this.isCardFlipped = false;
      }
    })
  }

  flipCard() {
    this.isCardFlipped = !this.isCardFlipped;
    setTimeout(() => {
      this.openModal.emit(this.card());
    },400)
  }

  openLink(event: MouseEvent){
    event.preventDefault();
  }

  
}
