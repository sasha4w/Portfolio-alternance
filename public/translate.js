const translations = {
  // HEADER
  tooltipWho: {
    en: "Who am I?",
    fr: "Qui suis-je?",
    kr: "제가 누구게?",
  },
  tooltipCV: {
    en: "Resume",
    fr: "CV",
    kr: "이력서",
  },
  tooltipProjects: {
    en: "Projects",
    fr: "Projets",
    kr: "프로젝트",
  },
  tooltipContacts: {
    en: "Contacts",
    fr: "Contacts",
    kr: "연락처",
  },
  hello: {
    en: "Hello, my name is Rochedix Sasha and this my portfolio. I'm backend developer looking for a internship. Check my works, my skills and if you are interested. Let's collaborate and build something incredible together !",
    fr: "Bonjour, je m'appelle Rochedix Sasha et bienvenue sur mon portfolio. Je suis développeur backend, actuellement à la recherche d'une alternance ou d'un stage. Consultez mes travaux et mes compétences, et si mon profil vous intéresse, n'hésitez pas à me contacter.",
    kr: "안녕하세요, 제 이름은 Rochedix Sasha입니다. 이것은 제 포트폴리오입니다.저는 백엔드 개발자이고 이 분야에서 인턴십을 찾고 있습니다. 제가 개발한 프로그램이 마음에 드셨으면 좋겠습니다. 이 분야에서 일하고 싶습니다.",
  },
  projetExplication: {
    en: "These are my student projects which I made in groups. During my studies, they allowed me to explore all the knowledge that I learned.",
    fr: "Voici mes projets d'études réalisés en groupe pour certains. Ceux-ci m'ont permis d'explorer l'ensemble des compétences que j'ai acquises.",
    kr: "이것들은 제가 그룹으로 진행한 연구 프로젝트들입니다.",
  },
  galleryExplication: {
    en: "These illustrations are made with Photoshop and Illustrator. There's a compilation of photoshopped images, a silkscreen, a logo made for a fictious company in my studies, and different ways of expressing my feelings.",
    fr: "Voici différentes illustrations que j'ai réalisées avec Photoshop et Illustrator. Il y a une compilation d'images modifiées, une sérigraphie, un logo pour une entreprise fictive réalisé pour mes études. Certains de ces projets sont pour moi une façon d'exprimer mes émotions.",
    kr: "이것들은 제가 포토샵과 일러스트레이터와 함께 만든 다른 그림들입니다.",
  },
  skillTools: {
    en: "My skills & tools",
    fr: "Mes compétences & outils",
    kr: "기술 및도구",
  },
  works: {
    en: "My works",
    fr: "Mes travaux",
    kr: "내 작품",
  },
  shortfolio: {
    en: "First portfolio made in the middle of my 1st year on mobile size",
    fr: "1er portfolio réalisé pendant mon premier semestre uniquement en format petit écran",
    kr: "",
  },
  beetrav: {
    en: "Hive fictional management site at the end of 2nd semester",
    fr: "Site de gestion de ruche fictif réalisé pour la fin de mon second semestre",
    kr: "하반기 말에 만들어진 가상의 벌집 관리 사이트",
  },
  mvc: {
    en: "Experimental MVC model fictional order site during my 3rd Semester",
    fr: "modèle MVC expérimental pour un site de commande fictif durant mon 3e Semestre",
    kr: "하반기 말에 만들어진 가상의 벌집 관리 사이트",
  },
  simonSays: {
    en: "Student project of webapp concept games exploiting many phone's API javascript function",
    fr: "Projet étudiant d'une webapp de mini jeux exploitant des fonctions API javascript",
    kr: "자바스크립트 API 기능을 이용한 미니 게임 웹앱 연구 프로젝트",
  },
  internshipExplaination: {
    en: "I worked 2 months in web agency in Retournac in France named Quarante3 with Simon Ducloux. I almost work on csm project with Wordpress",
    fr: "J'ai travaillé pendant deux mois au sein de l'agence web Quarante3, basée à Retournac et dirigée par Simon Ducloux. Mon rôle principal consistait à réaliser des projets de gestion de contenu (CMS) en utilisant WordPress.",
    kr: "저는 프랑스의 웹 관련 회사인 Retournac에서 두 달간 일한 경력이 있습니다. 저는 Wordpress와 csm 프로젝트를 수행 했었습니다.",
  },
  yogaClub: {
    en: "Wordpress website of yoga club lucéen",
    fr: "Site wordpress du yoga club lucéen",
    kr: "Wordpress 전시용 웹사이트웹사이트",
  },
  fermeReine: {
    en: "Wordpress website with Ecommerce",
    fr: "Site wordpress avec fonction ecommerce",
    kr: "Wordpress 전자상거래 기능이 있는 웹사이트 ",
  },
  showCode: {
    en: "Show code",
    fr: "Voir le code",
    kr: "쇼 코드",
  },
  artworks: {
    en: "Artworks",
    fr: "Réalisations graphiques",
    kr: "작품",
  },
  contactme: {
    en: "Get in touch ?",
    fr: "Me contacter",
    kr: "여기로 연락주시면 감사하겠습니다",
  },
  contactForm: {
    en: "Contact me",
    fr: "Envoyer un mail",
    kr: "이메일로 연락 주세요",
  },
  submitbtn: {
    en: "submit",
    fr: "soumettre",
    kr: "제출해주세요",
  },
  btnCV: {
    en: "my resume",
    fr: "mon CV",
    kr: "나의 이력서",
  },
  aboutme: {
    en: "About me",
    fr: "Qui suis je ?",
    kr: "나에 대해서",
  },
  webdev: {
    en: "Web Development",
    fr: "Dévelopement web",
    kr: "웹 개발",
  },
  graph: {
    en: "Graphic Creation",
    fr: "Création graphique",
    kr: "그래픽 디자인",
  },
  com: {
    en: "Communication",
    fr: "Communication",
    kr: "의사소통",
  },
};

function translatePage() {
  const lang = document.getElementById("language-select").value;

  // Translate the options in the dropdown list
  const options = document.querySelectorAll("#language-select option");
  options.forEach((option) => {
    const key = option.getAttribute("data-translate");
    if (translations[key] && translations[key][lang]) {
      option.textContent = translations[key][lang];
    }
  });

  // Translate elements with data-translate attribute
  document.querySelectorAll("[data-translate]").forEach((element) => {
    const key = element.getAttribute("data-translate");

    // Check if element has tooltip attribute
    const tooltip = element.getAttribute("tooltip");
    if (tooltip && translations[key] && translations[key][lang]) {
      // Update tooltip text with translation
      element.setAttribute("tooltip", translations[key][lang]);
    } else {
      // Update text content if translation exists
      if (translations[key] && translations[key][lang]) {
        element.textContent = translations[key][lang];
      }
    }
  });
}
