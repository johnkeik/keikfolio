import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollHandlerService {
  private _manualScrolling = signal(false);
  public manualScrolling = computed(() => this._manualScrolling());

  private _isNavBarVisible = signal(true);

  public isNavBarVisible = computed(() => {
    return this._isNavBarVisible() && !this._manualScrolling();
});


  public setIsNavBarVisible(value: boolean) {
    this._isNavBarVisible.set(value);
  }

  setManualScrolling(value: boolean) {
    this._manualScrolling.set(value);
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

  waitForScrollToFinish(): Promise<void> {
    this._manualScrolling.set(true);
    return new Promise((resolve) => {
      let lastScrollY = window.scrollY;
      const checkScroll = () => {
        if (lastScrollY !== window.scrollY) {
          lastScrollY = window.scrollY;
          requestAnimationFrame(checkScroll); // Continue checking
        } else {
          this._manualScrolling.set(false);
          resolve(); // Scroll has stopped
        }
      };
      requestAnimationFrame(checkScroll); // Start checking for scroll end
    });
  }
}
