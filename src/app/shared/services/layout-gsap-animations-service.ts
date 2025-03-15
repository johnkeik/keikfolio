import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { inject, Injectable } from '@angular/core';

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

@Injectable({
  providedIn: 'root',
})
export class LayoutGsapAnimationsService {
  constructor() {}

  public initGsapAnimations() {
    const masterTimeline = gsap.timeline();

    masterTimeline.from(
      '.about-section-title',
      {
        x: -200,
        y: 0,
        opacity: 0,
        duration: 3,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: '.about-section-title',
          start: () => `top 80%`,
          end: 'top 60%',
          scrub: 2,
        },
      },
      '+=0.5'
    ); 
    masterTimeline.from(
      '.about-section-description',
      {
        x: 0,
        y: 100,
        opacity: 0,
        duration: 3,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: '.about-section-description',
          start: () => `top 90%`,
          end: 'top 80%',
          scrub: 2,
        },
      },
      '+=1'
    ); 

    masterTimeline.from(
      '.skills-section-title',
      {
        x: 200,
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power1.out',
        stagger: 1,
        scrollTrigger: {
          trigger: '.skills-section-title',
          start: () => `top 95%`,
          end: 'top 85%',
          scrub: 2,
        },
      },
      '+=1'
    );
  }

  getScrollAmount() {
    const valuesContainer = document.querySelector('.values-container');
    return valuesContainer
      ? -(valuesContainer.scrollWidth - window.innerWidth)
      : 0;
  }
}
