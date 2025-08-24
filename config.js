// ===== CONFIGURACIÓN DEL PORTFOLIO =====
// Modifica estos valores para personalizar tu portfolio

const PORTFOLIO_CONFIG = {
    // ===== INFORMACIÓN PERSONAL =====
    personal: {
        name: "Tu Nombre",
        title: "Artista Creativo",
        subtitle: "Transformando ideas en arte visual",
        description: "Soy un artista apasionado por crear experiencias visuales únicas. Mi trabajo combina técnicas tradicionales con enfoques modernos para producir piezas que cuentan historias y evocan emociones.",
        location: "Buenos Aires, Argentina",
        email: "tuemail@ejemplo.com",
        phone: "+54 11 1234-5678"
    },

    // ===== HERO IMAGES =====
    heroImages: [
        {
            icon: "fas fa-palette",
            title: "Tu Nombre - Artista Creativo",
            subtitle: "Transformando ideas en arte visual"
        },
        {
            icon: "fas fa-paint-brush",
            title: "Tu Nombre - Pintor",
            subtitle: "Colores que cuentan historias"
        },
        {
            icon: "fas fa-pencil-alt",
            title: "Tu Nombre - Dibujante",
            subtitle: "Líneas que expresan emociones"
        },
        {
            icon: "fas fa-camera",
            title: "Tu Nombre - Fotógrafo",
            subtitle: "Capturando momentos únicos"
        }
    ],

    // ===== REDES SOCIALES =====
    social: {
        instagram: "https://instagram.com/tuusuario",
        facebook: "https://facebook.com/tuusuario",
        twitter: "https://twitter.com/tuusuario",
        linkedin: "https://linkedin.com/in/tuusuario",
        behance: "https://behance.net/tuusuario",
        dribbble: "https://dribbble.com/tuusuario"
    },

    // ===== HABILIDADES =====
    skills: [
        {
            name: "Pintura",
            percentage: 90,
            icon: "fas fa-paint-brush"
        },
        {
            name: "Dibujo",
            percentage: 85,
            icon: "fas fa-pencil-alt"
        },
        {
            name: "Digital",
            percentage: 80,
            icon: "fas fa-tablet-alt"
        },
        {
            name: "Fotografía",
            percentage: 75,
            icon: "fas fa-camera"
        },
        {
            name: "Escultura",
            percentage: 70,
            icon: "fas fa-hands"
        }
    ],

    // ===== CATEGORÍAS DEL PORTFOLIO =====
    categories: [
        {
            id: "all",
            name: "Todos",
            icon: "fas fa-th"
        },
        {
            id: "paintings",
            name: "Pinturas",
            icon: "fas fa-paint-brush"
        },
        {
            id: "drawings",
            name: "Dibujos",
            icon: "fas fa-pencil-alt"
        },
        {
            id: "digital",
            name: "Digital",
            icon: "fas fa-tablet-alt"
        },
        {
            id: "photography",
            name: "Fotografía",
            icon: "fas fa-camera"
        },
        {
            id: "sculpture",
            name: "Escultura",
            icon: "fas fa-hands"
        }
    ],

    // ===== OBRAS DEL PORTFOLIO =====
    portfolio: [
        {
            id: 1,
            title: "Obra 1",
            description: "Pintura al óleo",
            category: "paintings",
            image: "ruta/a/imagen1.jpg",
            year: "2024",
            technique: "Óleo sobre lienzo",
            dimensions: "100x80 cm"
        },
        {
            id: 2,
            title: "Obra 2",
            description: "Dibujo a lápiz",
            category: "drawings",
            image: "ruta/a/imagen2.jpg",
            year: "2024",
            technique: "Lápiz sobre papel",
            dimensions: "50x70 cm"
        },
        {
            id: 3,
            title: "Obra 3",
            description: "Arte digital",
            category: "digital",
            image: "ruta/a/imagen3.jpg",
            year: "2024",
            technique: "Ilustración digital",
            dimensions: "1920x1080 px"
        },
        {
            id: 4,
            title: "Obra 4",
            description: "Acuarela",
            category: "paintings",
            image: "ruta/a/imagen4.jpg",
            year: "2023",
            technique: "Acuarela sobre papel",
            dimensions: "30x40 cm"
        },
        {
            id: 5,
            title: "Obra 5",
            description: "Carboncillo",
            category: "drawings",
            image: "ruta/a/imagen5.jpg",
            year: "2023",
            technique: "Carboncillo sobre papel",
            dimensions: "60x80 cm"
        },
        {
            id: 6,
            title: "Obra 6",
            description: "Ilustración digital",
            category: "digital",
            image: "ruta/a/imagen6.jpg",
            year: "2023",
            technique: "Digital painting",
            dimensions: "2048x2048 px"
        }
    ],

    // ===== CONFIGURACIÓN DE ANIMACIONES =====
    animations: {
        enabled: true,
        duration: 800,
        easing: "ease-out",
        parallax: true,
        parallaxSpeed: 0.5,
        reducedMotion: true
    },

    // ===== CONFIGURACIÓN DE CONTACTO =====
    contact: {
        formEnabled: true,
        emailService: "formspree", // "formspree", "netlify", "custom"
        formspreeId: "tu-formspree-id",
        netlifyForm: "tu-formulario-netlify",
        successMessage: "¡Mensaje enviado correctamente!",
        errorMessage: "Hubo un error al enviar el mensaje."
    },

    // ===== CONFIGURACIÓN DE SEO =====
    seo: {
        title: "Portfolio Artístico - Tu Nombre",
        description: "Portfolio de artista creativo especializado en pintura, dibujo y arte digital. Explora mi trabajo y contáctame para colaboraciones.",
        keywords: "arte, portfolio, pintura, dibujo, digital, artista, creativo",
        author: "Tu Nombre",
        ogImage: "ruta/a/og-image.jpg"
    }
};

// ===== FUNCIONES DE CONFIGURACIÓN =====

// Aplicar configuración personal
function applyPersonalConfig() {
    // Actualizar nombre
    document.querySelectorAll('.nav-logo h2, .footer-text p').forEach(el => {
        el.textContent = el.textContent.replace('Tu Nombre', PORTFOLIO_CONFIG.personal.name);
    });

    // Actualizar título
    document.title = PORTFOLIO_CONFIG.seo.title;
    document.querySelector('.hero-title').textContent = PORTFOLIO_CONFIG.personal.title;
    document.querySelector('.hero-subtitle').textContent = PORTFOLIO_CONFIG.personal.subtitle;

    // Actualizar descripción
    document.querySelector('.about-text p').textContent = PORTFOLIO_CONFIG.personal.description;

    // Actualizar información de contacto
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems[0].querySelector('p').textContent = PORTFOLIO_CONFIG.personal.email;
    contactItems[1].querySelector('p').textContent = PORTFOLIO_CONFIG.personal.phone;
    contactItems[2].querySelector('p').textContent = PORTFOLIO_CONFIG.personal.location;
}

// Aplicar configuración de habilidades
function applySkillsConfig() {
    const skillsContainer = document.querySelector('.skills');
    if (skillsContainer) {
        skillsContainer.innerHTML = '';

        PORTFOLIO_CONFIG.skills.forEach(skill => {
            const skillHTML = `
                <div class="skill-item">
                    <span class="skill-name">
                        <i class="${skill.icon}"></i>
                        ${skill.name}
                    </span>
                    <div class="skill-bar">
                        <div class="skill-progress" style="width: ${skill.percentage}%"></div>
                    </div>
                </div>
            `;
            skillsContainer.innerHTML += skillHTML;
        });
    }
}

// Aplicar configuración de categorías
function applyCategoriesConfig() {
    const filtersContainer = document.querySelector('.portfolio-filters');
    if (filtersContainer) {
        filtersContainer.innerHTML = '';

        PORTFOLIO_CONFIG.categories.forEach(category => {
            const isActive = category.id === 'all' ? 'active' : '';
            const filterHTML = `
                <button class="filter-btn ${isActive}" data-filter="${category.id}">
                    <i class="${category.icon}"></i>
                    ${category.name}
                </button>
            `;
            filtersContainer.innerHTML += filterHTML;
        });
    }
}

// Aplicar configuración de redes sociales
function applySocialConfig() {
    const socialLinks = document.querySelectorAll('.social-link');

    // Instagram
    if (PORTFOLIO_CONFIG.social.instagram) {
        socialLinks[0].href = PORTFOLIO_CONFIG.social.instagram;
    }

    // Facebook
    if (PORTFOLIO_CONFIG.social.facebook) {
        socialLinks[1].href = PORTFOLIO_CONFIG.social.facebook;
    }

    // Twitter
    if (PORTFOLIO_CONFIG.social.twitter) {
        socialLinks[2].href = PORTFOLIO_CONFIG.social.twitter;
    }

    // LinkedIn
    if (PORTFOLIO_CONFIG.social.linkedin) {
        socialLinks[3].href = PORTFOLIO_CONFIG.social.linkedin;
    }
}

// Configurar formulario de contacto
function configureContactForm() {
    if (!PORTFOLIO_CONFIG.contact.formEnabled) {
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.style.display = 'none';
        }
        return;
    }

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        switch (PORTFOLIO_CONFIG.contact.emailService) {
            case 'formspree':
                contactForm.action = `https://formspree.io/f/${PORTFOLIO_CONFIG.contact.formspreeId}`;
                contactForm.method = 'POST';
                break;
            case 'netlify':
                contactForm.setAttribute('data-netlify', 'true');
                contactForm.setAttribute('name', PORTFOLIO_CONFIG.contact.netlifyForm);
                break;
            default:
                // Configuración personalizada
                break;
        }
    }
}

// Aplicar configuración de SEO
function applySEOConfig() {
    // Meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.content = PORTFOLIO_CONFIG.seo.description;
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
        metaKeywords.content = PORTFOLIO_CONFIG.seo.keywords;
    }

    const metaAuthor = document.querySelector('meta[name="author"]');
    if (metaAuthor) {
        metaAuthor.content = PORTFOLIO_CONFIG.seo.author;
    }

    // Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
        ogTitle.content = PORTFOLIO_CONFIG.seo.title;
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
        ogDescription.content = PORTFOLIO_CONFIG.seo.description;
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
        ogImage.content = PORTFOLIO_CONFIG.seo.ogImage;
    }
}

// Inicializar configuración
function initializeConfig() {
    applyPersonalConfig();
    applySkillsConfig();
    applyCategoriesConfig();
    applySocialConfig();
    configureContactForm();
    applySEOConfig();

    console.log('✅ Configuración del portfolio aplicada correctamente');
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeConfig);
} else {
    initializeConfig();
}

// Exportar configuración para uso global
window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;
