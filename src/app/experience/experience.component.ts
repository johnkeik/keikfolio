import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export interface Skill {
  skill: string;
  children?: Skill[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent implements AfterViewInit {
  angularSkills: Skill[] = [
    {
      skill:
        "Led a team of 4 developers in building a high-traffic Angular application, modernizing the company's core product with a strong emphasis on cross-browser compatibility and accessibility standards (WCAG).",
    },
    {
      skill:
        'Mentored 5+ junior engineers, improving code quality and reducing production bugs through best practices.',
    },
    {
      skill:
        'Conducted 30+ technical interviews, ensuring strong hires who contributed to faster feature development and reduced onboarding time.',
    },
    {
      skill:
        'Maintained and improved multiple Angular web applications, optimizing performance using various techniques like code splitting, lazy loading, and caching, reducing first contentful paint (FCP) and boosting Core Web Vitals scores.',
    },
  ];

  reactSkills: Skill[] = [
    {
      skill:
        'Led a team of 2 developers to design and launch a fully customizable mobile application using React Native. Some key featues of the app:',
      children: [
        {
          skill:
            'Generates a different bundle for each customer that is uploaded on both app stores from a single code base',
        },
        {
          skill: 'Fully customizable though remote configuration',
        },
        {
          skill: 'Reduced production time by 80%',
        },
      ],
    },
    {
      skill:
        'Collaborated closely with UX/UI designers and backend engineers to translate designs into responsive, high-performance components.',
    },
    {
      skill:
        'Conducted code reviews and provided mentorship, fostering a culture of continuous learning and code quality improvement.',
    },
    {
      skill:
        'Fastlane-Gitlab CI/CD. Collaborated with Dev-Ops team to automate the delivery process',
    },
    {
      skill:
        'Managed, maintained and enhanced multiple mobile apps on Titanium SDK',
    },
    {
      skill:
        'Experienced in manual app releases on both Google Play Store and Apple App Store.',
    },
    {
      skill:
        'Hands-on expertise with the Firebase suite (Push Notifications, Google Analytics, Firestore DB).',
    },
  ];

  freelanceSkills = [
    {
      skill: 'Multiple client projects created using Angular, React JS, React Native, Flutter',
    },
    {
      skill: 'Servers development using Node JS',
    },
  ];

  ngAfterViewInit(): void {
    gsap.from('.experience-section-title', {
      x: -800,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.experience-section-title',
        start: 'top 95%',
        end: 'top 90%',
        scrub: 2,
      },
    });

    this.initAngularSectionAnimations();
    this.initReactSectionAnimations();
    this.initFreelanceSectionAnimations();


   
  }

  initAngularSectionAnimations() {
    gsap.from('.skills-title-angular', {
      opacity: 0,
      y: 20,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.skills-title-angular',
        start: 'top 90%',
        end: 'top 80%',
        scrub: 2,
      },
    });

    gsap.to('.experience-tile-angular .right-container .title', {
      duration: 'Angular Tech Lead'.length * 0.1,
      text: 'Angular Tech Lead',
      ease: 'none',
      scrollTrigger: {
        trigger: '.experience-tile-angular',
        start: 'top 90%',
        end: 'top 0%',
        toggleActions: 'play reverse play reverse', // Reverse the animation when scrolling up
      },
    });

    gsap.from('.experience-tile-angular .left-container .circle', {
      scale: 0,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.experience-tile-angular',
        start: 'top 90%',
        end: 'top 85%',
        scrub: 2,
      },
    });

    gsap.from('.experience-tile-angular .left-container .line', {
      height: '0%',
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.experience-tile-angular',
        start: 'top 80%',
        end: 'top 70%',
        scrub: 1
      },
    });

    gsap.from('.experience-tile-angular .right-container .skill', {
      opacity: 0,
      y: 10,
      ease: 'power1.out',
      stagger: 0.5,
      scrollTrigger: {
        trigger: '.experience-tile-angular',
        start: 'top 80%',
        end: 'top 70%',
        scrub: 2
      },
    });
  }

  initReactSectionAnimations() {
    gsap.to('.experience-tile-react .right-container .title', {
      duration: 'React Native Tech Lead'.length * 0.1,
      text: 'React Native Tech Lead',
      ease: 'none',
      scrollTrigger: {
        trigger: '.experience-tile-react',
        start: 'top 90%',
        end: 'top 0%',
        toggleActions: 'play reverse play reverse', // Reverse the animation when scrolling up
      },
    });

    gsap.from('.experience-tile-react .left-container .circle', {
      scale: 0,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.experience-tile-react',
        start: 'top 90%',
        end: 'top 85%',
        scrub: 2,
      },
    });
    gsap.from('.experience-tile-react .left-container .line', {
      height: '0%',
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.experience-tile-react',
        start: 'top 80%',
        end: 'top 70%',
        scrub: 1
      },
    });

    gsap.from('.experience-tile-react .right-container .skill', {
      opacity: 0,
      y: 10,
      ease: 'power1.out',
      stagger: 0.5,
      scrollTrigger: {
        trigger: '.experience-tile-react',
        start: 'top 80%',
        end: 'top 70%',
        scrub: 2
      },
    });
  }

  initFreelanceSectionAnimations() {
    gsap.from('.skills-title-freelance', {
      opacity: 0,
      y: 20,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.skills-title-freelance',
        start: 'top 90%',
        end: 'top 80%',
        scrub: 2,
      },
    });
    gsap.to('.experience-tile-freelance .right-container .title', {
      duration: 'Full Stack Engineer'.length * 0.1,
      text: 'Full Stack Engineer',
      ease: 'none',
      scrollTrigger: {
        trigger: '.experience-tile-freelance',
        start: 'top 90%',
        end: 'top 0%',
        toggleActions: 'play reverse play reverse', // Reverse the animation when scrolling up
      },
    });

    gsap.from('.experience-tile-freelance .left-container .circle', {
      scale: 0,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.experience-tile-freelance',
        start: 'top 90%',
        end: 'top 85%',
        scrub: 2,
      },
    });
    gsap.from('.experience-tile-freelance .left-container .line', {
      height: '0%',
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.experience-tile-freelance',
        start: 'top 80%',
        end: 'top 70%',
        scrub: 1
      },
    });

    gsap.from('.experience-tile-freelance .right-container .skill', {
      opacity: 0,
      y: 10,
      ease: 'power1.out',
      stagger: 0.5,
      scrollTrigger: {
        trigger: '.experience-tile-freelance',
        start: 'top 80%',
        end: 'top 70%',
        scrub: 2
      },
    });
  }
}
