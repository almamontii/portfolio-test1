// ===== NAVEGACIÓN MÓVIL =====
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// ===== SCROLL SUAVE =====
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

// ===== NAVEGACIÓN ACTIVA AL SCROLL =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== FILTROS DEL PORTFOLIO =====
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remover clase active de todos los botones
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Agregar clase active al botón clickeado
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
                item.style.animation = 'fadeInUp 0.6s ease-out';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// ===== ANIMACIONES AL SCROLL =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animación
document.querySelectorAll('.portfolio-item, .about-content, .contact-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== FORMULARIO DE CONTACTO =====
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Obtener datos del formulario
    const formData = new FormData(contactForm);
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;

    // Validación básica
    if (!name || !email || !message) {
        showNotification('Por favor, completa todos los campos', 'error');
        return;
    }

    if (!isValidEmail(email)) {
        showNotification('Por favor, ingresa un email válido', 'error');
        return;
    }

    // Simular envío
    showNotification('Mensaje enviado correctamente!', 'success');
    contactForm.reset();
});

// Función para validar email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Función para mostrar notificaciones
function showNotification(message, type) {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    // Estilos de la notificación
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;

    // Colores según el tipo
    if (type === 'success') {
        notification.style.background = '#28a745';
    } else {
        notification.style.background = '#dc3545';
    }

    // Agregar al DOM
    document.body.appendChild(notification);

    // Mostrar notificación
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Ocultar después de 3 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// ===== NAVEGACIÓN CON TECLADO =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// ===== EFECTOS DE HOVER MEJORADOS =====
portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-10px) scale(1.02)';
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1)';
    });
});

// ===== SCROLL TO TOP BUTTON =====
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    font-size: 1.2rem;
`;

document.body.appendChild(scrollTopBtn);

// Mostrar/ocultar botón según scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
    }
});

// Scroll to top al hacer clic
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== PRELOADER =====
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// ===== DETECCIÓN DE DISPOSITIVO MÓVIL =====
function isMobile() {
    return window.innerWidth <= 768;
}

// Ajustar comportamiento según dispositivo
if (isMobile()) {
    // Deshabilitar algunos efectos hover en móvil
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.style.transform = 'none';
    });
}

// ===== LAZY LOADING PARA IMÁGENES =====
const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// ===== MENÚ HAMBURGUESA MEJORADO =====
let isMenuOpen = false;

navToggle.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

// Cerrar menú al hacer clic fuera
document.addEventListener('click', (e) => {
    if (isMenuOpen && !navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        isMenuOpen = false;
        document.body.style.overflow = 'auto';
    }
});

// ===== ANIMACIÓN DE SKILLS =====
const skillBars = document.querySelectorAll('.skill-progress');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBar = entry.target;
            const width = skillBar.style.width;
            skillBar.style.width = '0%';

            setTimeout(() => {
                skillBar.style.width = width;
            }, 200);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => skillObserver.observe(bar));

// ===== EFECTOS DE PARALLAX SUAVE =====
// Comentado para evitar que el div pequeño se mueva
/*
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-placeholder, .about-placeholder');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});
*/

// ===== DETECCIÓN DE REDUCED MOTION =====
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Deshabilitar animaciones para usuarios que prefieren movimiento reducido
    document.documentElement.style.setProperty('--animation-duration', '0s');
    document.documentElement.style.setProperty('--transition-duration', '0s');
}

// ===== HERO NAVIGATION =====
const heroImages = [
    {
        icon: 'fas fa-plus',
        title: 'Tu nombre - Artista Creativo',
        subtitle: 'Transformando ideas en arte visual',
        image: null
    },
    {
        icon: 'fas fa-plus',
        title: 'Tu nombre - Pintor',
        subtitle: 'Colores que cuentan historias',
        image: null
    },
    {
        icon: 'fas fa-plus',
        title: 'Tu nombre - Dibujante',
        subtitle: 'Líneas que expresan emociones',
        image: null
    }
];

let currentHeroIndex = 0;

function updateHeroContent(index) {
    const heroPlaceholder = document.querySelector('.hero-placeholder');
    const heroCaption = document.querySelector('.hero-caption');
    
    if (heroPlaceholder && heroCaption) {
        const image = heroImages[index];
        
        // Actualizar contenido del placeholder
        if (image.image) {
            // Si hay una imagen cargada, mostrarla
            heroPlaceholder.innerHTML = `
                <img src="${image.image}" alt="Hero image" style="width: 100%; height: 100%; object-fit: cover; border-radius: 15px;">
                <div class="image-overlay">
                    <i class="fas fa-edit" title="Cambiar imagen"></i>
                </div>
            `;
        } else {
            // Si no hay imagen, mostrar el icono
            heroPlaceholder.innerHTML = `<i class="${image.icon}"></i>`;
        }
        
        // Actualizar texto
        heroCaption.innerHTML = `
            <p>${image.title}</p>
            <p>${image.subtitle}</p>
        `;
    }
}

// Función para cargar imagen
function loadHeroImage() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    
    input.onchange = function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                // Guardar la imagen en el array
                heroImages[currentHeroIndex].image = e.target.result;
                
                // Guardar en localStorage para persistencia
                localStorage.setItem('heroImages', JSON.stringify(heroImages));
                
                // Actualizar la visualización
                updateHeroContent(currentHeroIndex);
                
                // Mostrar notificación de éxito
                showNotification('Imagen cargada correctamente!', 'success');
            };
            reader.readAsDataURL(file);
        }
    };
    
    input.click();
}

// Función para cargar imágenes guardadas al iniciar
function loadSavedImages() {
    const savedImages = localStorage.getItem('heroImages');
    if (savedImages) {
        try {
            const parsedImages = JSON.parse(savedImages);
            // Actualizar solo las imágenes que están guardadas
            parsedImages.forEach((savedImage, index) => {
                if (savedImage.image && index < heroImages.length) {
                    heroImages[index].image = savedImage.image;
                }
            });
                console.log('Imágenes guardadas cargadas correctamente');
} catch (error) {
    console.error('Error al cargar imágenes guardadas:', error);
}
}

// Función para eliminar imagen
function removeHeroImage() {
    if (heroImages[currentHeroIndex].image) {
        // Eliminar la imagen
        heroImages[currentHeroIndex].image = null;
        
        // Guardar en localStorage
        localStorage.setItem('heroImages', JSON.stringify(heroImages));
        
        // Actualizar la visualización
        updateHeroContent(currentHeroIndex);
        
        // Mostrar notificación
        showNotification('Imagen eliminada. Haz clic para agregar una nueva.', 'success');
    }
}
    }
}

// Event listeners para navegación
document.addEventListener('DOMContentLoaded', () => {
    // Cargar imágenes guardadas al iniciar
    loadSavedImages();
    
        // Event listener para cargar imagen al hacer clic en el placeholder
    const heroPlaceholder = document.querySelector('.hero-placeholder');
    if (heroPlaceholder) {
        heroPlaceholder.addEventListener('click', loadHeroImage);
        // Agregar soporte para teclado en móvil
        heroPlaceholder.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                loadHeroImage();
            }
        });
        
        // Agregar doble clic para eliminar imagen
        heroPlaceholder.addEventListener('dblclick', removeHeroImage);
        
        // Event listener para el overlay de edición (se agrega dinámicamente)
        document.addEventListener('click', (e) => {
            if (e.target.closest('.image-overlay')) {
                loadHeroImage();
            }
        });
    }
    

});

console.log('Portfolio artístico cargado correctamente! 🎨');
