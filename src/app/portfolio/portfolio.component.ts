import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { ModalComponent } from './modal/modal.component';

export interface Bullet {
  name: string;
  description?: string;
}
export interface FeaturedList {
  title: string;
  bullets: Bullet[];
}
export interface PortfolioProjectType {
  name: string;
  shortDescription: string;
  imgSrc: string;
  liveLink?: string;
  githubLink: string;
  modalData?: {
    description?: string;
    featuredList: FeaturedList[];
  };
}
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CardComponent, ModalComponent],
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
      modalData: {
        description:
          'AutoDBSCAN is a web application designed to facilitate clustering analysis using the DBSCAN algorithm. Users can upload datasets and the application will assist in determining the appropriate values for the parameters minpts and eps. Once the parameters are set, AutoDBSCAN performs the clustering and presents the results to the user. The application features a user-friendly web interface and a WEB API that supports all operations via HTTP requests.',
          featuredList: [
            {
              title: 'Key features',
              bullets: [
                { name: 'Dataset Upload', description: 'Users can upload their datasets for analysis.' },
                { name: 'Parameter Selection Assistance', description: 'The application helps users determine optimal minpts and eps values.' },
                { name: 'Clustering Execution', description: 'Executes the DBSCAN algorithm on the uploaded datasets.' },
                { name: 'Results Visualization', description: 'Displays the clustering results in a user-friendly format.' },
                { name: 'Web API', description: 'Allows execution of all functionalities via HTTP requests.' }
              ]
            },
            {
              title: 'Technologies',
              bullets: [
                { name: 'Next.js'  },
                { name: 'Node.js' },
                { name: 'Clustering Algorithm', description: 'Python (DBSCAN implementation)' },
                { name: 'API Documentation', description: 'Swagger for API documentation' }
              ]
            }
          ]
          
      },
    },
  ];

  projectForModal?: PortfolioProjectType;

  handleOpenModal(project: PortfolioProjectType) {
    this.projectForModal = project;
  }

  handleCloseModal() {
    this.projectForModal = undefined;
  }
}
