import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { Icons } from './icons';
import { IconNameType } from './icon-name-type.enum';

export type IconType = keyof typeof Icons;

/**
 * The icon component
 */
@Component({
  standalone: true,
  selector: 'cwo-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<span
    style="width:100%; height:100%"
    [innerHTML]="svg"
    [style.height]="size()"
    [style.display]="display()"
    [style.width]="size()">
  </span>`
})
export class IconComponent {
  size = input('100%');
  display = input('flex');
  name = input.required<IconNameType>();

  constructor(private sanitizer: DomSanitizer) {}
  
  protected get svg(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(Icons[this.name()]);
  }
}