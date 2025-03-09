import { Component } from '@angular/core';
import { IconComponent } from '../shared/pipes/icons/icon.component';
import { IconNameType } from '../shared/pipes/icons/icon-name-type.enum';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  iconNameType = IconNameType;

}
