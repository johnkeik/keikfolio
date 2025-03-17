import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  heroSection = [
    "I'm",
    'John',
    'Keikoglou',
    'Senior',
    'Front-End',
    'Engineer',
    'Angular,',
    'React,',
    'Flutter',
  ];

  aboutSection = [
    "about", "Innovative", "and", "results-driven", "front-end", "engineer", "with", "a", "passion", 
    "for", "crafting", "seamless,", "high-performance", "web", "and", "mobile", "experiences", 
    "using", "Angular", "and", "React", "Native.", "Known", "for", "technical", "excellence,", 
    "clear", "communication,", "and", "a", "strong", "collaborative", "approach,", "I", "thrive", 
    "in", "fast-paced", "environments,", "building", "scalable,", "efficient,", "and", 
    "user-centric", "applications.", "I", "take", "pride", "in", "optimizing", "performance,", 
    "implementing", "best", "practices,", "and", "mentoring", "teams,", "ensuring", "both", 
    "technical", "growth", "and", "product", "success.", "Whether", "architecting", "complex", 
    "solutions", "or", "fine-tuning", "UI", "interactions,", "I", "am", "committed", "to", 
    "delivering", "exceptional", "digital", "experiences."
  ];

  portfolioTitle = [
    "Front-End", "Lead", "Engineer",  
    "2020", "-", "Present",  
    "Foodtec", "Solutions"
  ];
  
  portfolioAngular = [
    "Angular", "Tech", "Lead",
    "Led", "a", "team", "of", "4", "developers", "in", "building", "a", "high-traffic", 
    "Angular", "application,", "modernizing", "the", "company's", "core", "product", "with", 
    "a", "strong", "emphasis", "on", "cross-browser", "compatibility", "and", "accessibility", 
    "standards", "(WCAG).",
    "Mentored", "5+", "junior", "engineers,", "improving", "code", "quality", "and", 
    "reducing", "production", "bugs", "through", "best", "practices.",
    "Conducted", "30+", "technical", "interviews,", "ensuring", "strong", "hires", "who", 
    "contributed", "to", "faster", "feature", "development", "and", "reduced", "onboarding", "time.",
    "Maintained", "and", "improved", "multiple", "Angular", "web", "applications,", "optimizing", 
    "performance", "using", "various", "techniques", "like", "code", "splitting,", "lazy", 
    "loading,", "and", "caching,", "reducing", "first", "contentful", "paint", "(FCP)", 
    "and", "boosting", "Core", "Web", "Vitals", "scores."
  ];

  portfolioReact = [
    "React", "Native", "Tech", "Lead",
    "Led", "a", "team", "of", "2", "developers", "to", "design", "and", "launch", "a", 
    "fully", "customizable", "mobile", "application", "using", "React", "Native.",
    "Some", "key", "features", "of", "the", "app:",
    "Generates", "a", "different", "bundle", "for", "each", "customer", "that", "is", 
    "uploaded", "on", "both", "app", "stores", "from", "a", "single", "code", "base",
    "Fully", "customizable", "through", "remote", "configuration",
    "Reduced", "production", "time", "by", "80%",
    "Collaborated", "closely", "with", "UX/UI", "designers", "and", "backend", "engineers", 
    "to", "translate", "designs", "into", "responsive,", "high-performance", "components.",
    "Conducted", "code", "reviews", "and", "provided", "mentorship,", "fostering", "a", 
    "culture", "of", "continuous", "learning", "and", "code", "quality", "improvement.",
    "Fastlane-Gitlab", "CI/CD.", "Collaborated", "with", "Dev-Ops", "team", "to", "automate", 
    "the", "delivery", "process",
    "Managed,", "maintained", "and", "enhanced", "multiple", "mobile", "apps", "on", 
    "Titanium", "SDK",
    "Experienced", "in", "manual", "app", "releases", "on", "both", "Google", "Play", 
    "Store", "and", "Apple", "App", "Store.",
    "Hands-on", "expertise", "with", "the", "Firebase", "suite", "(Push", "Notifications,", 
    "Google", "Analytics,", "Firestore", "DB)."
  ];
  
  
  portfolioFreelancer = [
    "Freelance", "software", "engineer",
    "2019", "-", "Present",
    "Self", "employed",
    "Full", "Stack", "Engineer",
    "Multiple", "client", "projects", "created", "using", "Angular,", "React", "JS,", 
    "React", "Native,", "Flutter",
    "Servers", "development", "using", "Node", "JS"
  ];

  searchTerm: string = '';  // Holds the search term input by the user
  searchResults: Array<{ sectionName: string, words: string[], focusField: string }> = []; 
  manualScroll = false;
 
  onSearch(): void {
    this.searchResults = [];  // Clear previous results
    if (this.searchTerm.trim() !== '') {
      this.searchArray('heroSection', this.heroSection);
      this.searchArray('aboutSection', this.aboutSection);
      this.searchArray('portfolioTitle', this.portfolioTitle);
      this.searchArray('portfolioAngular', this.portfolioAngular);
      this.searchArray('portfolioReact', this.portfolioReact);
      this.searchArray('portfolioFreelancer', this.portfolioFreelancer);


    }
  }

  // Helper method to search in an array and add results to searchResults
  private searchArray(arrayName: string, array: string[]): void {
    const matchingWords = array.filter(word => word.toLowerCase().includes(this.searchTerm.toLowerCase()));
    if (matchingWords.length > 0) {
      const sectionName = this.assignSectionName(arrayName);
      this.searchResults.push({ sectionName, words: matchingWords, focusField: arrayName });
    }
  }

  private assignSectionName(arrayName: string){
    switch(arrayName) {
      case 'heroSection': return 'Hero Section';
      case 'aboutSection': return 'About Section';
      case 'portfolioTitle': return 'Portfolio Section';
      case 'portfolioAngular': return 'Portfolio Section';
      case 'portfolioReact': return 'Portfolio Section';
      case 'portfolioFreelancer': return 'Portfolio Section';
      default: return ''
    }
  }

  focusField(focusField: string){
    const el = document.getElementById('search-focus-hero-section');
    this.manualScroll = true;
    if(el) {
      this.searchTerm = "";
      this.searchResults = [];
      el.scrollIntoView({ behavior: 'smooth' , block:'center'});
      el.style.borderRadius = '15px';
      el.style.outline = '2px solid var(--accent)';
      el.style.outlineOffset = '8px';

      setTimeout(() => {
        const el = document.getElementById('search-focus-hero-section');
        if(el) el.style.outline = 'none';
      },3000)
    }
  }

  waitForScrollToFinish(): Promise<void> {
    return new Promise((resolve) => {
      let lastScrollY = window.scrollY;
      const checkScroll = () => {
        if (lastScrollY !== window.scrollY) {
          lastScrollY = window.scrollY;
          requestAnimationFrame(checkScroll); // Continue checking
        } else {
          resolve(); // Scroll has stopped
        }
      };
      requestAnimationFrame(checkScroll); // Start checking for scroll end
    });
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    if(!this.manualScroll){

      this.searchTerm = "";
      this.searchResults = [];
      const el = document.getElementById('search-focus-hero-section');
      if(el) el.style.outline = 'none';
    }
  }

}
