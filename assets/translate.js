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
        fr: "Bonjour, je m'appelle Rochedix Sasha et voici mon portfolio. Je suis backend developer je suis à la recherche d'une alternance ou d'un stage. Regarder mes travaux, mes compétences et si vous êtes intéressé par mon profil contacter ",
        kr: "안녕하세요, 제 이름은 Rochedix Sasha입니다. 이것은 제 포트폴리오입니다.",
    },
    projetExplication: {
        en: "These are my student projects which I made in groups. During my studies, they allowed me to explore all the knowledge that I learned.",
        fr: "Voici mes projets d'études réalisés en groupe pour certains. Ceux-ci m'ont permis d'explorer l'ensemble des compétences que j'ai acquises.",
        kr: "",
    },
    galleryExplication: {
        en: "These illustrations are made with Photoshop and Illustrator. There's a compilation of photoshopped images, a silkscreen, a logo made for a fictitious company in my studies, and different ways of expressing my feelings.",
        fr: "Voici différentes illustrations que j'ai réalisées avec Photoshop et Illustrator. Il y a une compilation d'images modifiées, une sérigraphie, un logo pour une entreprise fictive réalisé pour mes études. Certains de ces projets sont pour moi une façon d'exprimer mes émotions.",
        kr: "",
    },
    skillTools:{
        en:"My skills & tools",
        fr:"Mes compétences & outils",
        kr:"내 기술과 도구",
    },
    works:{
        en:"My works",
        fr:"Mes travaux",
        kr:"내 작품",
    },
    shortfolio:{
        en:"First portfolio made in the middle of my 1st year on mobile size",
        fr:"1er portfolio réalisé pendant mon premier semestre uniquement en format petit écran",
        kr:"",
    },
    beetrav:{
        en:"Hive fictional management site at the end of 2nd semester",
        fr:"Site de gestion de ruche fictif réalisé pour la fin de mon second semestre",
        kr:"",
    },
    mvc:{
        en:"Experimental MVC model order site during my 3rd Semester",
        fr:"MVC modèle expérimental pour un site de commande durant mon 3e Semestre",
        kr:"",
    },
    showCode:{
        en:"Show code",
        fr:"Voir le code",
        kr:"쇼 코드",
    },
    artworks:{
        en:"Artworks",
        fr:"Réalisations graphiques",
        kr:"삽화",
    },
    contactme:{
        en:"Get in touch ?",
        fr:"Me contacter",
        kr:"연락이 닿다",
    },
    contactForm:{
        en:"Contact me",
        fr:"Envoyer un mail",
        kr:"이메일로 연락 주세요",
    },
    submitbtn:{
        en:"submit",
        fr:"soumettre",
        kr:"제출해요",
    },
    btnCV:{
        en:"my resume",
        fr:"mon CV",
        kr:"나의 이력서",
    },
    aboutme:{
        en:"About me",
        fr:"Qui suis je ?",
        kr:"내가 뭔데요?",
    },
    webdev:{
        en:"Web Development",
        fr:"Dévelopement web",
        kr:"웹 개발",
    },
    graph:{
        en:"Graphic Creation",
        fr:"Création graphique",
        kr:"그래픽 디자인",
    },
    com:{
        en:"Communication",
        fr:"Communication",
        kr:"의사소통",
    },
    // Add other translations as needed
};

function translatePage() {
    const lang = document.getElementById('language-select').value;

    // Translate the options in the dropdown list
    const options = document.querySelectorAll('#language-select option');
    options.forEach(option => {
        const key = option.getAttribute('data-translate');
        if (translations[key] && translations[key][lang]) {
            option.textContent = translations[key][lang];
        }
    });

    // Translate elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');

        // Check if element has tooltip attribute
        const tooltip = element.getAttribute('tooltip');
        if (tooltip && translations[key] && translations[key][lang]) {
            // Update tooltip text with translation
            element.setAttribute('tooltip', translations[key][lang]);
        } else {
            // Update text content if translation exists
            if (translations[key] && translations[key][lang]) {
                element.textContent = translations[key][lang];
            }
        }
    });
}

