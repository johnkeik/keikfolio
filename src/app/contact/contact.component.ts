import { AfterViewInit, Component } from '@angular/core';
import { IconComponent } from '../shared/pipes/icons/icon.component';
import { IconNameType } from '../shared/pipes/icons/icon-name-type.enum';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements AfterViewInit {
  iconNameType = IconNameType;

  ngAfterViewInit(): void {
    gsap.from('.contact-section .title-container .section-title', {
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 90%',
        end: 'top 75%',
        scrub: 1,
      },
    });
    gsap.from('.contact-section .title-container .line', {
      duration: 2,
      width: '0%',
      scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 90%',
        end: 'top 75%',
        scrub: 1,
      },
    });
  }
}
