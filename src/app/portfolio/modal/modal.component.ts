import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject, input, OnDestroy, OnInit, output, ViewChild } from '@angular/core';
import { PortfolioProjectType } from '../portfolio.component';
import { IconComponent } from '../../shared/pipes/icons/icon.component';
import { IconNameType } from '../../shared/pipes/icons/icon-name-type.enum';
import { SafeUrlPipe } from '../../shared/pipes/safe-url';
import { ScrollHandlerService } from '../../shared/services/scroll-handler.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, IconComponent, SafeUrlPipe],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit, OnDestroy, AfterViewInit{
  scrollHandlerService = inject(ScrollHandlerService);
  project = input.required<PortfolioProjectType>();
  
  close = output();

  iconNameType = IconNameType;
  iphoneFrameHeight = 0;
  iphoneFrameWidth = 0;

  @ViewChild('iphoneFrame') iphoneFrame?: HTMLElement;

  ngOnInit(): void {
    this.scrollHandlerService.actionsWhenAtleastOneModalOpen();
  }

  ngAfterViewInit(): void {
    if(this.iphoneFrame) {
      this.iphoneFrameHeight = this.iphoneFrame.clientHeight;
      this.iphoneFrameWidth = this.iphoneFrame.clientWidth;

      console.log(this.iphoneFrameHeight, this.iphoneFrameWidth);
    }
  }

  ngOnDestroy(): void {
    this.scrollHandlerService.actionswhenAllModalsClosed();
  }

  closeModal() {
    this.close.emit();
  }

  openLink(link: string) {
    window.open(link,'_blank')
  }
}
