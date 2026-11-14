import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";
import project5 from "../assets/projects/project5.png";
import project6 from "../assets/projects/project6.png";
import phoneMockup from "../assets/projects/phone2.png";
import byggexpWeb1 from "../assets/projects/byggexp-web1.jpg";
import byggexpWeb2 from "../assets/projects/byggexp-web2.jpg";
import byggexpWeb3 from "../assets/projects/byggexp-web3.jpg";
import byggexpAdmin1 from "../assets/projects/byggexp-admin1.jpg";
import byggexpAdmin2 from "../assets/projects/byggexp-admin2.jpg";
import byggexpAdmin3 from "../assets/projects/byggexp-admin3.jpg";


export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string | null;
  repo?: string;
  phone?: string;
  gallery?: string[];
  fullDescription?: string[];
  role?: string;
  keyFeatures?: string;
  challenges?: string;
  type?: string;
  year?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "ByggExp",
    repo: "https://github.com/alexgeho/ByggExp.se",
    description:
      "Presentationswebbplats för ByggExp – en plattform för tidsrapportering, projektstyrning och fakturering. Integrerad med mobilapp och adminpanel.",
    image: byggexpWeb1,
    gallery: [byggexpWeb1, byggexpWeb2, byggexpWeb3],
    link: "https://byggexp.se/",
    type: "Product Website",
    year: "2025",
    fullDescription: [
      "Utvecklade en landningssida som fungerar som ingång till en mobilapp och adminpanel för tidsrapportering och projektstyrning.",
      "Implementerade användarregistrering med autentisering och datalagring (MongoDB).",
      "Fokuserade på responsiv design, prestanda och fullstack-funktionalitet.",
    ],
    role: "Full-stack development, UI and responsive layout, Authentication and admin panel, API and system architecture, Feature planning and customization.",
    keyFeatures: "Produktpresentation, användarregistrering och inloggning",
    tags: ["Next.js", "MongoDB"],
    challenges: "Skalbar och modulär frontendarkitektur",
  },
  {
    id: 2,
    title: "ByggExp Admin",
    repo: "https://github.com/alexgeho/byggexp-admin",
    description:
      "Adminpanel för ByggExp – hantering av projekt, uppgifter, dokumentation och personal i realtid. Integrerad med mobilapp och backend.",
    image: byggexpAdmin1,
    gallery: [byggexpAdmin1, byggexpAdmin2, byggexpAdmin3],
    link: "https://admin.byggexp.se/",
    type: "Admin Dashboard",
    year: "2026",
    fullDescription: [
      "Central kontrollpanel för byggföretag integrerad med mobilapp, backend, databas samt ekonomisystem som Visma och Fortnox.",
      "Samlar projekt, personal och verksamhetsdata i ett gemensamt system för effektiv administration och uppföljning.",
    ],
    keyFeatures:
      "Automatisk tidsrapportering, uppgifter med påminnelser, personalöversikt i realtid, fotodokumentation kopplad till projekt, projekt- och personalplanering, fakturor och offerter.",
    tags: ["React", "TypeScript", "REST API"],
  },
  {
    id: 3,
    title: "ByggExp App",
    repo: "https://github.com/alexgeho/byggexp-app",
    description:
      "Mobilapp för tidsrapportering, uppgiftshantering och projektstyrning. Integrerad med ByggExps adminpanel och backend.",
    image: project3,
    phone: phoneMockup,
    link: null,
    year: "2023",
    fullDescription: [
      "Mobilapplikation utvecklad för byggföretag med fokus på enkel rapportering och uppföljning direkt från arbetsplatsen.",
      "Integrerad med ByggExps adminpanel, backend och databas för synkronisering av projekt-, personal- och verksamhetsdata i realtid.",
    ],
    tags: ["React Native", "MongoDB"],
  },
  {
    id: 4,
    title: "AGRY AB",
    repo: "https://github.com/alexgeho/js-intro-inl-1-webshop",
    description:
      "Webbshop för prefabricerade armeringsprodukter med användarautentisering och responsiv design.",
    image: project4,
    link: "https://alexgeho.github.io/js-intro-inl-1-webshop/",
    type: "E-Commerce",
    year: "2022",
    fullDescription: [
      "Webbshop utvecklad för försäljning av prefabricerade armeringsprodukter för grundläggningsprojekt i Sverige.",
      "Implementerade produktkatalog, användarautentisering och administrationsfunktioner.",
    ],
    role: "Frontend development, UI layout and responsive design, Authentication flow (login / register UI), Admin panel structure, SCSS architecture.",
    keyFeatures:
      "Produktkatalog, användarregistrering, inloggning, adminfunktioner och responsiv design.",
    tags: ["HTML5", "SCSS", "JavaScript"],
    challenges:
      "Skalbar frontendarkitektur med återanvändbara komponenter och tydlig struktur.",
  },
  {
    id: 5,
    title: "Blogger Backend",
    repo: "https://github.com/alexgeho/blogger-platform-Nestjs",
    description: "REST API för hantering av användare, inlägg och kommentarer.",
    image: project5,
    link: null,
    type: "REST API",
    year: "2024",
    fullDescription: [
      "Utvecklade ett REST API med autentisering, användare, inlägg och kommentarer.",
      "Implementerade JWT-autentisering, CRUD-operationer, validering och API-dokumentation.",
    ],
    keyFeatures:
      "JWT-autentisering, CRUD-operationer, användare, inlägg, kommentarer och Swagger-dokumentation.",
    tags: ["NestJS", "TypeScript", "MongoDB", "REST API"],
    challenges:
      "Modulär arkitektur och tydlig separation av ansvar mellan API-komponenter.",
  },
  {
    id: 6,
    title: "Express Platform",
    repo: "https://github.com/alexgeho/my-api",
    description: "REST API byggt med Express och TypeScript.",
    image: project6,
    link: null,
    type: "Backend System",
    year: "2025",
    fullDescription: [
      "Utvecklade ett REST API med fokus på routing, middleware och datavalidering.",
      "Arbetade med typning, CRUD-operationer och strukturering av backendlogik.",
    ],
    keyFeatures:
      "Arbetade med CRUD-operationer, datavalidering och typsäker backendutveckling.",
    tags: ["Express", "TypeScript", "Node.js"],
  },
];
