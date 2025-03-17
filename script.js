// Configuración de EmailJS
emailjs.init('u6Ra1bqeXCRPdr7Mg');

// Datos del CV
const cvData = {
  personalInfo: {
    name: 'Wilson Adolfo Coc Avila',
    title: 'Desarrollador Web',
    email: 'wilsoncoc5678@gmail.com',
    phone: '+502 35989374',
    image: 'https://i.imgur.com/kkTJaSB.jpeg',
  },
  education: [
    {
      degree: 'INGENIERÍA EN SISTEMAS DE INFORMACIÓN Y CIENCIAS DE LA COMPUTACIÓN',
      school: 'Universidad Mariano Gálvez de Guatemala, sede Chimaltenango',
      period: '2022 - Actualidad',
      icon: 'fa-university',
    },
    {
      degree: 'Carrera: Perito en informática ',
      school: 'CETACH no.2',
      period: '2019 - 2021',
      icon: 'fa-graduation-cap',
    },
  ],
  skills: [
    { name: 'HTML', icon: 'fa-html5', color: 'text-orange-500', type: 'fa' },
    { name: 'CSS', icon: 'fa-css3-alt', color: 'text-blue-500', type: 'fa' },
    {
      name: 'Bootstrap',
      icon: 'fa-bootstrap',
      color: 'text-purple-500',
      type: 'fa',
    },
    {
      name: 'Tailwind',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      color: 'text-blue-400',
      type: 'svg',
    },
    {
      name: 'WordPress',
      icon: 'fa-wordpress',
      color: 'text-blue-500',
      type: 'fa',
    },
    { name: 'JavaScript', icon: 'fa-js', color: 'text-yellow-500', type: 'fa' },
    { name: 'React', icon: 'fa-react', color: 'text-blue-400', type: 'fa' },
    { name: 'Angular', icon: 'fa-angular', color: 'text-red-500', type: 'fa' },
    {
      name: 'MySQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      color: 'text-blue-600',
      type: 'svg',
    },
    {
      name: 'C++',
      icon: 'https://cdn.worldvectorlogo.com/logos/c.svg',
      color: 'text-blue-500',
      type: 'svg',
    },
    { name: 'Java', icon: 'fa-java', color: 'text-red-600', type: 'fa' },
    {
      name: 'SQL Server',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
      color: 'text-gray-400',
      type: 'svg',
    },
    {
      name: 'Postman',
      icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
      color: 'text-orange-500',
      type: 'svg',
    },
    { name: 'Git', icon: 'fa-git-alt', color: 'text-red-500', type: 'fa' },
    { name: 'GitHub', icon: 'fa-github', color: 'text-white', type: 'fa' },
  ],
  projects: [
    {
      title: 'Página Curriculum Vitae',
      description: 'Página web de curriculum vitae con HTML, CSS y JavaScript',
      image: 'blob:https://imgur.com/1f2014b7-9580-4bc5-9c00-9e147b47443d',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      demoUrl: '#',
      githubUrl: 'https://github.com/wilsoon77/Micv',
    },
    {
      title: 'Proyecto Ferretería con Carrito de Compras',
      description:
        'Ferretería API Rest con Spring Boot y Java como Backend y Angular para el Frontend',
      image: 'https://i.imgur.com/thYFdvN.png',
      technologies: [
        'Angular',
        'TypeScript',
        'Spring Boot',
        'MySql',
        'Java',
        'HTML',
        'CSS',
        'JavaScript',
      ],
      demoUrl: '#',
      githubUrl: 'https://github.com/wilsoon77/FERRETERIA-FINAL-PROJECT',
    },
    {
      title: 'Aplicación Escritorio De Gestion De una Ferretería',
      description:
        'Sistema POS (Punto de Venta) diseñado para una ferretería. Cuenta con un CRUD, generador de reportes y gráfica de las ventas realizadas.',
      image: 'https://i.imgur.com/FOHjPbe.png',
      technologies: ['Java', 'MySql', 'Netbeans'],
      demoUrl: '#',
      githubUrl: 'https://github.com/wilsoon77/Ferreteria-project',
    },
    {
      title: 'Sistema de Administración y Gestión De Un Colegio',
      description:
        'Proyecto colaborativo para la gestión escolar. Incluye validaciones y funcionalidades generales. Desarrollado con Java y SQL Server.',
      image: 'https://i.imgur.com/2FF33RY.png',
      technologies: ['Java', 'Netbeans', 'SQL Server', 'Tabajo Colaborativo'],
      demoUrl: '#',
      githubUrl: 'https://github.com/lester-yat/colegio-java',
    },
    {
      title: 'Próximos Proyectos..',
      description:
        'Más proyectos en desarrollo, que se iran añadiendo a este portafolio.',
      image:
        'https://bernekrausen.com/wp-content/uploads/2023/10/page-underconstruction1.jpg',
      technologies: ['Se revelarán próximamente'],
      demoUrl: '#',
      githubUrl: '#',
    },
  ],
};

// Función para mostrar notificación
function showNotification(message, type) {
  const notification = document.getElementById('notification');
  const notificationMessage = document.getElementById('notification-message');

  notification.className = `notification ${type}`;
  notificationMessage.textContent = message;

  notification.classList.add('show');

  setTimeout(() => {
    notification.classList.remove('show');
  }, 3000);
}

// Función para mostrar el loader
function showLoader() {
  const loader = document.getElementById('loader');
  loader.style.display = 'flex';
  loader.style.opacity = '1';
}

// Función para ocultar el loader
function hideLoader() {
  const loader = document.getElementById('loader');
  loader.style.opacity = '0';
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

  document.getElementById('contact-email').textContent =
    cvData.personalInfo.email;
  document.getElementById('contact-phone').textContent =
    cvData.personalInfo.phone;
}

// Función para crear la lista de educación
function createEducationList() {
  const educationList = document.getElementById('education-list');
  educationList.innerHTML = cvData.education
    .map(
      (edu, index) => `
    <div class="experience-card" style="animation-delay: ${index * 0.2}s">
      <div class="flex">
        <div class="icon">
          <i class="fas ${edu.icon}"></i>
        </div>
        <div class="content">
          <h3>${edu.degree}</h3>
          <p class="school">${edu.school}</p>
          <p class="period">
            <i class="far fa-calendar-alt"></i>${edu.period}
          </p>
        </div>
      </div>
    </div>
  `
    )
    .join('');
}

// Función para crear la lista de habilidades
function createSkillsList() {
  const skillsList = document.getElementById('skills-list');
  skillsList.innerHTML = cvData.skills
    .map((skill, index) => {
      const iconElement =
        skill.type === 'fa'
          ? `<i class="fab ${skill.icon}"></i>`
          : `<img src="${skill.icon}" alt="${skill.name}" class="skill-icon">`;

      return `
      <div class="skill-tag" style="animation-delay: ${index * 0.1}s">
        ${iconElement}
        ${skill.name}
      </div>
    `;
    })
    .join('');
}

// Función para crear la lista de proyectos
function createProjectsList() {
  const projectsList = document.getElementById('projects-list');
  projectsList.innerHTML = cvData.projects
    .map(
      (project, index) => `
    <div class="project-card" style="animation-delay: ${index * 0.2}s">
      <img src="${project.image}" alt="${project.title}">
      <div class="project-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="technologies">
          ${project.technologies
            .map(
              (tech) => `
            <span class="tech-tag">${tech}</span>
          `
            )
            .join('')}
        </div>
        <div class="project-links">
          <a href="${project.githubUrl}" target="_blank" class="github-link">
            <i class="fab fa-github"></i>Código
            <i class="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
    </div>
  `
    )
    .join('');
}

// Función para manejar las animaciones de scroll
function handleScrollAnimations() {
  const reveals = document.querySelectorAll('.reveal');

  reveals.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('active');
    }
  });
}

// Función para manejar el scroll suave
function handleSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });

        // Si estamos en móvil, cerrar el menú después de hacer clic
        const mobileMenu = document.getElementById('mobile-menu');
        if (window.innerWidth <= 768) {
          mobileMenu.classList.add('hidden');
        }
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
    particles.forEach((particle) => {
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

// Función para manejar el menú móvil
function handleMobileMenu() {
  const menuButton = document.getElementById('menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Cerrar el menú al hacer clic en cualquier lugar fuera de él
  document.addEventListener('click', (e) => {
    if (!menuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.add('hidden');
    }
  });

  // Prevenir que el clic en el menú lo cierre
  mobileMenu.addEventListener('click', (e) => {
    e.stopPropagation();
  });
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
        showNotification(
          '¡Mensaje enviado con éxito! Gracias por contactarme.',
          'success'
        );
        form.reset();
      }
    } catch (error) {
      console.error('Error:', error);
      showNotification(
        'Error al enviar el mensaje. Por favor, intenta nuevamente.',
        'error'
      );
    } finally {
      hideLoader();
    }
  });
}

// Inicializar el CV
async function initCV() {
  showLoader();

  try {
    // Inicializar todas las funcionalidades
    updatePersonalInfo();
    createEducationList();
    createSkillsList();
    createProjectsList();
    handleSmoothScroll();
    initParticles();
    handleContactForm();
    handleMobileMenu();

    // Agregar listener para las animaciones de scroll
    window.addEventListener('scroll', handleScrollAnimations);
    handleScrollAnimations();

    // Ocultar el loader después de que todo esté inicializado
    setTimeout(hideLoader, 1000);
  } catch (error) {
    console.error('Error initializing CV:', error);
    hideLoader();
    showNotification(
      'Error al cargar el CV. Por favor, recarga la página.',
      'error'
    );
  }
}

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', initCV);