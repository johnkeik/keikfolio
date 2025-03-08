import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  isCardFlipped = false;
  showModal = false;
  imgUrl = input.required();

  flipCard() {
    this.isCardFlipped = !this.isCardFlipped;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.isCardFlipped = false;
  }
}
