import { Component } from '@angular/core';

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
export class ExperienceComponent {
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
}
