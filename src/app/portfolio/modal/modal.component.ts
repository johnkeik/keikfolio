import { CommonModule } from '@angular/common';
import { Component, input, OnDestroy, OnInit, output } from '@angular/core';
import { PortfolioProjectType } from '../portfolio.component';
import { IconComponent } from '../../shared/pipes/icons/icon.component';
import { IconNameType } from '../../shared/pipes/icons/icon-name-type.enum';
import { SafeUrlPipe } from '../../shared/pipes/safe-url';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, IconComponent, SafeUrlPipe],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit, OnDestroy{
  project = input.required<PortfolioProjectType>();
  
  close = output();

  iconNameType = IconNameType;

  ngOnInit(): void {
    this.actionsWhenAtleastOneModalOpen();
  }

  ngOnDestroy(): void {
    this.actionswhenAllModalsClosed();
  }

  actionswhenAllModalsClosed() {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '0';
  }

  actionsWhenAtleastOneModalOpen() {
    const scrollBarWidth = this.getScrollBarWidth();
    document.body.style.overflow = 'hidden';
    if(scrollBarWidth === 0) return;
    document.body.style.paddingRight = `${scrollBarWidth}px`;
  }


  private getScrollBarWidth(): number {
    // Create a temporary div container and append it into the body
    const container = document.createElement('div');
    container.style.visibility = 'hidden';
    container.style.overflow = 'scroll'; // forcing scrollbar to appear
    document.body.appendChild(container);

    // Create a temporary inner element and append it into the container
    const inner = document.createElement('div');
    container.appendChild(inner);

    // Calculate the width based on the difference between container's full width and the child width
    const scrollBarWidth = container.offsetWidth - inner.offsetWidth;

    // Remove the temporary elements from the DOM
    document.body.removeChild(container);

    return scrollBarWidth;
  }

  closeModal() {
    this.close.emit();
  }

  openLink(link: string) {
    window.open(link,'_blank')
  }
}
