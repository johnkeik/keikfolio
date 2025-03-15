import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements OnInit {
  skills = [
    {
      title: 'Angular',
      imgSrc: '../../assets/images/skills/angular.png',
    },
    {
      title: 'React, React Native',
      imgSrc: '../../assets/images/skills/react.png',
    },
    {
      title: 'Flutter',
      imgSrc: '../../assets/images/skills/flutter.png',
    },
    {
      title: 'Html, CSS, JS',
      imgSrc: '../../assets/images/skills/html.png',
    },
    {
      title: 'Firebase Suite',
      imgSrc: '../../assets/images/skills/firebase.png',
    },
    {
      title: 'Google Analytics',
      imgSrc: '../../assets/images/skills/analytics.png',
    },
    {
      title: 'Sentry Reporting',
      imgSrc: '../../assets/images/skills/sentry.png',
    },
    {
      title: 'Node JS',
      imgSrc: '../../assets/images/skills/node.png',
    },
    {
      title: 'MySQL',
      imgSrc: '../../assets/images/skills/sql.png',
    }
  ];

  ngOnInit(): void {
    gsap.to('.square', {
      opacity: 1,
      y: 0,
      ease: 'power1.out',
      stagger: 0.5,
      scrollTrigger: {
        trigger: '.skills-section-title',
        start: 'top 80%',
        end: 'top 10%',
        scrub: true,
      },
    });
  }
}
