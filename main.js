import emailjs from '@emailjs/browser';

// Datos del CV
const cvData = {
  personalInfo: {
    name: "Wilson Adolfo Coc Avila",
    title: "Desarrollador Web",
    email: "wilsoncoc5678@gmail.com",
    phone: "+502 35989374",
    image: "https://i.imgur.com/7DwQLwo.jpeg"
  },
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
  ],
  projects: [
    {
      title: "Página Curriculum Vitae",
      description: "Página web de curriculum vitae con HTML, CSS y JavaScript",
      image: "https://i.imgur.com/Q3Dueqr.png",
      technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
      demoUrl: "#",
      githubUrl: "https://github.com/wilsoon77/Micv"
    },
    {
      title: "Proyecto Ferretería con Carrito de Compras",
      description: "Ferretería API Rest con Spring Boot y Java como Backend y Angular para el Frontend",
      image: "https://i.imgur.com/thYFdvN.png",
      technologies: ["Angular", "TypeScript", "Spring Boot", "MySql", "Java", "HTML", "CSS", "JavaScript"],
      demoUrl: "#",
      githubUrl: "https://github.com/wilsoon77/FERRETERIA-FINAL-PROJECT"
    },
    {
      title: "Aplicación Escritorio De Gestion De una Ferretería",
      description: "Sistema POS (Punto de Venta) diseñado para una ferretería. Cuenta con un CRUD, generador de reportes y gráfica de las ventas realizadas.",
      image: "https://i.imgur.com/FOHjPbe.png",
      technologies: ["Java", "MySql", "Netbeans"],
      demoUrl: "#",
      githubUrl: "https://github.com/wilsoon77/Ferreteria-project"
    },
    {
      title: "Sistema de Administración y Gestión De Un Colegio",
      description: "Proyecto colaborativo para la gestión escolar. Incluye validaciones y funcionalidades generales. Desarrollado con Java y SQL Server.",
      image: "https://i.imgur.com/2FF33RY.png",
      technologies: ["Java", "Netbeans", "SQL Server", "Tabajo Colaborativo"],
      demoUrl: "#",
      githubUrl: "https://github.com/lester-yat/colegio-java"
    },
    {
      title: "Próximos Proyectos..",
      description: "Más proyectos en desarrollo, que se iran añadiendo a este portafolio.",
      image: "https://bernekrausen.com/wp-content/uploads/2023/10/page-underconstruction1.jpg",
      technologies: ["Se revelarán próximamente"],
      demoUrl: "#",
      githubUrl: "#"
    }
  ]
};

// Configuración de EmailJS
emailjs.init("u6Ra1bqeXCRPdr7Mg");

// Función para mostrar notificación
function showNotification(message, type) {
  const notification = document.getElementById('notification');
  const notificationMessage = document.getElementById('notification-message');
  
  notification.className = `notification ${type}`;
  notificationMessage.textContent = message;
  
  // Mostrar notificación
  setTimeout(() => {
    notification.classList.add('show');
  }, 100);
  
  // Ocultar notificación después de 3 segundos
  setTimeout(() => {
    notification.classList.remove('show');
  }, 3000);
}

// Función para mostrar el loader
function showLoader() {
  const loader = document.getElementById('loader');
  loader.style.display = 'flex';
}

// Función para ocultar el loader
function hideLoader() {
  const loader = document.getElementById('loader');
  loader.style.opacity = '0';
  loader.style.transition = 'opacity 0.5s ease-out';
  setTimeout(() => {
    loader.style.display = 'none';
  }, 500);
}

// Función para actualizar la información personal
function updatePersonalInfo() {
  document.getElementById('name').textContent = cvData.personalInfo.name;
  document.getElementById('title').textContent = cvData.personalInfo.title;
  document.getElementById('email').textContent = cvData.personalInfo.email;
  document.getElementById('phone').textContent = cvData.personalInfo.phone;
  document.getElementById('profile-image').src = cvData.personalInfo.image;
  
  // Actualizar información de contacto
  document.getElementById('contact-email').textContent = cvData.personalInfo.email;
  document.getElementById('contact-phone').textContent = cvData.personalInfo.phone;
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

// Función para crear la lista de proyectos

/* 
* <a href="${project.demoUrl}" target="_blank" 
*             class="text-blue-400 hover:text-blue-300 transition-colors">
*            <i class="fas fa-external-link-alt mr-2"></i>Demo
*          </a>
*/

function createProjectsList() {
  const projectsList = document.getElementById('projects-list');
  projectsList.innerHTML = cvData.projects.map((project, index) => `
    <div class="project-card bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-up" 
         style="animation-delay: ${index * 0.2}s">
      <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
      <div class="p-6">
        <h3 class="text-xl font-semibold text-white mb-2">${project.title}</h3>
        <p class="text-gray-300 mb-4">${project.description}</p>
        <div class="flex flex-wrap gap-2 mb-4">
          ${project.technologies.map(tech => `
            <span class="px-2 py-1 bg-gray-600 text-sm text-gray-300 rounded">${tech}</span>
          `).join('')}
        </div>
        <div class="flex justify-between">
        
         
          
          <a href="${project.githubUrl}" target="_blank" 
             class="text-blue-400 hover:text-blue-300 transition-colors">
            <i class="fab fa-github mr-2"></i>Código
            <i class="fas fa-external-link-alt mr-2"></i>
          </a>
        </div>
      </div>
    </div>
  `).join('');
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

// Función para manejar el envío del formulario de contacto
function handleContactForm() {
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    try {
      showLoader();
      
      const result = await emailjs.sendForm(
        'service_rbk2uty',
        'template_qj3qq26',
        form
      );
      
      if (result.text === 'OK') {
        showNotification('¡Mensaje enviado con éxito! Gracias por contactarme.', 'success');
        form.reset();
      }
    } catch (error) {
      console.error('Error:', error);
      showNotification('Error al enviar el mensaje. Por favor, intenta nuevamente.', 'error');
    } finally {
      hideLoader();
    }
  });
}

//funcion para el menu desplegable
document.getElementById('menu-button').addEventListener('click', function() {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('hidden');
});


// Inicializar el CV
async function initCV() {
  showLoader();
  
  try {
    await Promise.all([
      updatePersonalInfo(),
      createEducationList(),
      createSkillsList(),
      createProjectsList(),
      handleSmoothScroll(),
      initParticles(),
      handleContactForm()
    ]);
    
    // Agregar listener para las animaciones de scroll
    window.addEventListener('scroll', handleScrollAnimations);
    // Trigger inicial para elementos visibles
    handleScrollAnimations();
  } catch (error) {
    console.error('Error initializing CV:', error);
  
  } finally {
    // Ocultar el loader después de un pequeño delay para asegurar que todo esté cargado
    setTimeout(hideLoader, 1000);
  }
}

// Cargar el CV cuando el documento esté listo
document.addEventListener('DOMContentLoaded', initCV);