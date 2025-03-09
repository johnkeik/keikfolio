import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';

export interface PortfolioProjectType {
  name: string;
  shortDescription: string;
  imgSrc: string;
  liveLink?: string;
  githubLink: string;
  description?: string;
}
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  cards: PortfolioProjectType[] = [
    {
      name: 'Rehab Fighters',
      shortDescription: 'A client website for display of the brand / blog',
      imgSrc: '../../../assets/portfolio/rehab_fighters.png',
      liveLink: 'https://rehabfighters.gr',
      githubLink: '',
    },
    {
      name: 'Whoopie Web',
      shortDescription: 'A client website for display of the brand / blog',
      imgSrc: '../../../assets/portfolio/whoopieweb.png',
      liveLink: 'https://whoopiewebapp.web.app/',
      githubLink: '',
    },
    {
      name: 'ikDV Website',
      shortDescription: 'A client website for display of the brand / blog',
      imgSrc: '../../../assets/portfolio/ikdv.png',
      liveLink: 'https://whoopiewebapp.web.app/',
      githubLink: '',
    },
    {
      name: 'AutoDBSCAN',
      shortDescription: 'A client website for display of the brand / blog',
      imgSrc: '../../../assets/portfolio/dbscan.png',
      githubLink: 'https://github.com/johnkeik/AutoDBSCAN',
      description:
        'AutoDBSCAN is a web application designed to facilitate clustering analysis using the DBSCAN algorithm. Users can upload datasets and the application will assist in determining the appropriate values for the parameters minpts and eps. Once the parameters are set, AutoDBSCAN performs the clustering and presents the results to the user. The application features a user-friendly web interface and a WEB API that supports all operations via HTTP requests.',
    },
  ];
}
