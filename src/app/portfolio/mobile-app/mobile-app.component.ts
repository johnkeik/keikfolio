import {
  Component,
  ElementRef,
  inject,
  viewChild,
  ViewChild,
} from '@angular/core';
import { SafeUrlPipe } from '../../shared/pipes/safe-url';
import { CommonModule } from '@angular/common';
import { ScrollHandlerService } from '../../shared/services/scroll-handler.service';

@Component({
  selector: 'app-mobile-app',
  standalone: true,
  imports: [SafeUrlPipe, CommonModule],
  templateUrl: './mobile-app.component.html',
  styleUrl: './mobile-app.component.scss',
})
export class MobileAppComponent {
  scrollHandlerService = inject(ScrollHandlerService);

  iphoneFrameHeight = 0;
  iphoneFrameWidth = 0;
  showIframe = false;
  enabledMobileIframe = false;

  @ViewChild('mobileContainer') mobileContainer?: ElementRef<HTMLDivElement>;
  @ViewChild('iphoneFrame') iphoneFrame?: ElementRef<HTMLImageElement>;
  @ViewChild('iframeContainer') iframeContainer?: ElementRef<HTMLDivElement>;

  updateFrameDimensions(): void {
    if (this.iphoneFrame) {
      this.iphoneFrameHeight = this.iphoneFrame.nativeElement.clientHeight;
      this.iphoneFrameWidth = this.iphoneFrame.nativeElement.clientWidth;
      this.showIframe = true;
      console.log(this.iphoneFrameHeight);
    }
  }

  onClick() {
    if (this.enabledMobileIframe) {
      this.scrollHandlerService.actionswhenAllModalsClosed();
      this.enabledMobileIframe = false;
    } else {
      this.scrollHandlerService.setManualScrolling(true);
      this.scrollHandlerService.setIsNavBarVisible(false);
      this.mobileContainer?.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block:  window.innerWidth < 420 ? 'end' : 'center',
      });
      setTimeout(() => {
        this.scrollHandlerService.actionsWhenAtleastOneModalOpen();
        this.enabledMobileIframe = true;
        this.scrollHandlerService.setManualScrolling(false);
      },500);
    }
  }
}
