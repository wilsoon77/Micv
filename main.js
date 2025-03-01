// Datos del CV
const cvData = {
  personalInfo: {
    name: "Wilson Adolfo Coc Avila",
    title: "Desarrollador Web",
    email: "wilsoncoc5678@gmail.com",
    phone: "+502 35989374",
    image: "https://t4.ftcdn.net/jpg/04/09/86/15/360_F_409861532_l6vKbJSMetiiBt62XclpiKRvO7LZ7hCj.jpg"
  },
  experience: [
    {
      title: "Desarrollador Senior",
      company: "Empresa Tech",
      period: "2020 - Presente",
      description: "Desarrollo de aplicaciones web utilizando las últimas tecnologías.",
      icon: "fa-code"
    },
    {
      title: "Desarrollador Web",
      company: "Startup Innovadora",
      period: "2018 - 2020",
      description: "Creación de sitios web responsivos y mantenimiento de aplicaciones existentes.",
      icon: "fa-laptop-code"
    }
  ],
  education: [
    {
      degree: "Ingeniería en Sistemas",
      school: "Universidad Mariano Gálvez de Guatemala",
      period: "2022 - Actualidad",
      icon: "fa-university"
    },
    {
      degree: "Carrera: Perito en informática ",
      school: "CETACH no.2",
      period: "2019 - 2021",
      icon: "fa-graduation-cap"
    }
  ],
  skills: [
    { name: "HTML", icon: "fa-html5", color: "text-orange-500", type: "fa" },
    { name: "CSS", icon: "fa-css3-alt", color: "text-blue-500", type: "fa" },
    { name: "Bootstrap", icon: "fa-bootstrap", color: "text-purple-500", type: "fa" },
    { 
      name: "Tailwind", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", 
      color: "text-blue-400", 
      type: "svg" 
    },
    { name: "WordPress", icon: "fa-wordpress", color: "text-blue-500", type: "fa" },
    { name: "JavaScript", icon: "fa-js", color: "text-yellow-500", type: "fa" },
    { name: "React", icon: "fa-react", color: "text-blue-400", type: "fa" },
    { name: "Angular", icon: "fa-angular", color: "text-red-500", type: "fa" },
    { 
      name: "MySQL", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", 
      color: "text-blue-600", 
      type: "svg" 
    },
    { name: "C++", icon: "https://cdn.worldvectorlogo.com/logos/c.svg", color: "text-blue-500", type: "svg" },
    { name: "Java", icon: "fa-java", color: "text-red-600", type: "fa" },
    { 
      name: "SQL Server", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg", 
      color: "text-gray-400", 
      type: "svg" 
    },
    { 
      name: "Postman", 
      icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", 
      color: "text-orange-500", 
      type: "svg" 
    },
    { name: "Git", icon: "fa-git-alt", color: "text-red-500", type: "fa" },
    { name: "GitHub", icon: "fa-github", color: "text-white", type: "fa" }
  ]
};

// Función para actualizar la información personal
function updatePersonalInfo() {
  document.getElementById('name').textContent = cvData.personalInfo.name;
  document.getElementById('title').textContent = cvData.personalInfo.title;
  document.getElementById('email').textContent = cvData.personalInfo.email;
  document.getElementById('phone').textContent = cvData.personalInfo.phone;
  document.getElementById('profile-image').src = cvData.personalInfo.image;
}

// Función para crear la lista de experiencia
function createExperienceList() {
  const experienceList = document.getElementById('experience-list');
  // Verificar si el elemento existe antes de intentar modificarlo
  if (!experienceList) return;
  
  experienceList.innerHTML = cvData.experience.map((exp, index) => `
    <div class="experience-card mb-6 p-6 rounded-lg border border-gray-700 hover:border-blue-700 animate-slide-in" style="animation-delay: ${index * 0.2}s">
      <div class="flex items-start">
        <div class="mr-4">
          <i class="fas ${exp.icon} text-2xl text-blue-400"></i>
        </div>
        <div>
          <h3 class="text-xl font-semibold text-white">${exp.title}</h3>
          <p class="text-blue-400 mb-2">${exp.company}</p>
          <p class="text-gray-400 text-sm mb-2">
            <i class="far fa-calendar-alt mr-2"></i>${exp.period}
          </p>
          <p class="text-gray-300">${exp.description}</p>
        </div>
      </div>
    </div>
  `).join('');
}

// Función para crear la lista de educación
function createEducationList() {
  const educationList = document.getElementById('education-list');
  educationList.innerHTML = cvData.education.map((edu, index) => `
    <div class="experience-card mb-6 p-6 rounded-lg border border-gray-700 hover:border-blue-700 animate-slide-in" style="animation-delay: ${index * 0.2}s">
      <div class="flex items-start">
        <div class="mr-4">
          <i class="fas ${edu.icon} text-2xl text-blue-400"></i>
        </div>
        <div>
          <h3 class="text-xl font-semibold text-white">${edu.degree}</h3>
          <p class="text-blue-400">${edu.school}</p>
          <p class="text-gray-400 text-sm">
            <i class="far fa-calendar-alt mr-2"></i>${edu.period}
          </p>
        </div>
      </div>
    </div>
  `).join('');
}

// Función para crear la lista de habilidades
function createSkillsList() {
  const skillsList = document.getElementById('skills-list');
  skillsList.innerHTML = cvData.skills.map((skill, index) => {
    // Determinar si es un icono de Font Awesome o una imagen SVG
    const iconElement = skill.type === 'fa' 
      ? `<i class="fab ${skill.icon} mr-2 ${skill.color}"></i>`
      : `<img src="${skill.icon}" alt="${skill.name}" class="w-5 h-5 mr-2" />`;
    
    return `
      <div class="skill-tag px-4 py-2 rounded-full flex items-center animate-fade-in-up" 
           style="animation-delay: ${index * 0.1}s">
        ${iconElement}
        ${skill.name}
      </div>
    `;
  }).join('');
}

// Función para manejar las animaciones de scroll
function handleScrollAnimations() {
  const reveals = document.querySelectorAll('.reveal');
  
  reveals.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('active');
    }
  });
}

// Función para manejar el scroll suave
function handleSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Función para inicializar el fondo de partículas
function initParticles() {
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  let particles = [];
  
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1;
      this.speedX = Math.random() * 2 - 1;
      this.speedY = Math.random() * 2 - 1;
    }
    
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      
      if (this.x > canvas.width) this.x = 0;
      if (this.x < 0) this.x = canvas.width;
      if (this.y > canvas.height) this.y = 0;
      if (this.y < 0) this.y = canvas.height;
    }
    
    draw() {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  
  function init() {
    particles = [];
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());
    }
  }
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });
    requestAnimationFrame(animate);
  }
  
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  init();
  animate();
}

// Inicializar el CV
function initCV() {
  updatePersonalInfo();
  createExperienceList();
  createEducationList();
  createSkillsList();
  handleSmoothScroll();
  initParticles();
  
  // Agregar listener para las animaciones de scroll
  window.addEventListener('scroll', handleScrollAnimations);
  // Trigger inicial para elementos visibles
  handleScrollAnimations();
}

// Cargar el CV cuando el documento esté listo
document.addEventListener('DOMContentLoaded', initCV);