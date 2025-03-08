import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
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
      title: 'Node JS',
      imgSrc: '../../assets/images/skills/node.png',
    },
    {
      title: 'MySQL',
      imgSrc: '../../assets/images/skills/sql.png',
    },
    {
      title: 'Firebase Suite',
      imgSrc: '../../assets/images/skills/firebase.png',
    },
  ];
}
