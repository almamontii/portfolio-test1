# 🎨 Portfolio Artístico - Template Responsive

Un template moderno y elegante para portfolio artístico, completamente responsive y optimizado para móvil y desktop.

## ✨ Características

### 📱 **Versión Móvil**
- **Navegación hamburguesa** con animaciones suaves
- **Layout optimizado** para pantallas pequeñas
- **Botones táctiles** con tamaño adecuado
- **Grid de una columna** para portfolio
- **Formulario simplificado** para mejor UX
- **Menú lateral** que se desliza desde la izquierda
- **Botones de filtro** apilados verticalmente
- **Imágenes redimensionadas** para mejor rendimiento

### 🖥️ **Versión Desktop**
- **Navegación horizontal** completa
- **Layout de dos columnas** para mejor aprovechamiento del espacio
- **Grid de tres columnas** para portfolio
- **Efectos hover** elaborados
- **Animaciones parallax** suaves
- **Filtros horizontales** con mejor espaciado
- **Formulario de contacto** con layout de dos columnas

## 🚀 Instalación

1. **Clona o descarga** los archivos del proyecto
2. **Abre** `index.html` en tu navegador
3. **¡Listo!** El portfolio está funcionando

## 📁 Estructura del Proyecto

```
portfolio-artistico/
├── index.html          # Estructura principal
├── styles.css          # Estilos CSS con media queries
├── script.js           # Funcionalidad JavaScript
└── README.md           # Este archivo
```

## 🎨 Personalización

### 1. **Información Personal**
Edita el archivo `index.html`:

```html
<!-- Cambia el nombre -->
<title>Portfolio Artístico - Tu Nombre</title>
<div class="nav-logo">
    <h2>Tu Nombre</h2>
</div>

<!-- Actualiza la información de contacto -->
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <div>
        <h3>Email</h3>
        <p>tuemail@ejemplo.com</p>
    </div>
</div>
```

### 2. **Colores del Tema**
Modifica en `styles.css`:

```css
/* Colores principales */
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --text-color: #333;
    --background-color: #f5f7fa;
}
```

### 3. **Imágenes del Portfolio**
Reemplaza los placeholders con tus imágenes:

```html
<div class="portfolio-image">
    <img src="ruta/a/tu/imagen.jpg" alt="Descripción de la obra">
    <div class="portfolio-overlay">
        <h3>Título de la Obra</h3>
        <p>Técnica utilizada</p>
    </div>
</div>
```

### 4. **Categorías del Portfolio**
Ajusta las categorías en `index.html`:

```html
<div class="portfolio-filters">
    <button class="filter-btn active" data-filter="all">Todos</button>
    <button class="filter-btn" data-filter="pinturas">Pinturas</button>
    <button class="filter-btn" data-filter="dibujos">Dibujos</button>
    <button class="filter-btn" data-filter="digital">Digital</button>
</div>
```

Y actualiza los elementos del portfolio:

```html
<div class="portfolio-item" data-category="pinturas">
    <!-- Contenido del item -->
</div>
```

## 📱 Media Queries Implementadas

### **Móvil (≤ 768px)**
```css
@media (max-width: 768px) {
    /* Navegación hamburguesa */
    /* Layout de una columna */
    /* Botones apilados */
    /* Grid simplificado */
}
```

### **Celular Pequeño (≤ 480px)**
```css
@media (max-width: 480px) {
    /* Tamaños reducidos */
    /* Espaciado optimizado */
    /* Botones más grandes para touch */
}
```

### **Desktop (> 768px)**
```css
@media (min-width: 769px) {
    /* Efectos hover */
    /* Layout de dos columnas */
    /* Animaciones elaboradas */
}
```

### **Pantallas Grandes (≥ 1200px)**
```css
@media (min-width: 1200px) {
    /* Tamaños aumentados */
    /* Grid de tres columnas */
    /* Espaciado generoso */
}
```

## ⚡ Funcionalidades JavaScript

### **Navegación**
- Menú hamburguesa responsive
- Scroll suave entre secciones
- Navegación activa al hacer scroll
- Cierre automático del menú

### **Portfolio**
- Filtros dinámicos por categoría
- Animaciones al hacer scroll
- Efectos hover (solo en desktop)
- Lazy loading para imágenes

### **Formulario**
- Validación de campos
- Notificaciones de éxito/error
- Prevención de envío múltiple

### **UX/UI**
- Botón "Volver arriba"
- Detección de dispositivo móvil
- Soporte para reduced motion
- Efectos parallax suaves

## 🎯 Optimizaciones

### **Rendimiento**
- CSS optimizado con media queries
- JavaScript modular y eficiente
- Lazy loading para imágenes
- Animaciones CSS en lugar de JS

### **Accesibilidad**
- Navegación con teclado
- Soporte para lectores de pantalla
- Contraste de colores adecuado
- Tamaños de botón apropiados

### **SEO**
- Estructura HTML semántica
- Meta tags optimizados
- URLs amigables
- Contenido estructurado

## 🔧 Configuración Avanzada

### **Agregar Nuevas Secciones**
1. Crea la sección en HTML
2. Agrega los estilos en CSS
3. Implementa la funcionalidad en JS
4. Actualiza la navegación

### **Cambiar Fuentes**
```html
<link href="https://fonts.googleapis.com/css2?family=Nueva+Fuente:wght@400;700&display=swap" rel="stylesheet">
```

```css
body {
    font-family: 'Nueva Fuente', sans-serif;
}
```

### **Agregar Animaciones Personalizadas**
```css
@keyframes miAnimacion {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.mi-elemento {
    animation: miAnimacion 0.8s ease-out;
}
```

## 📞 Soporte

Para personalizaciones adicionales o soporte técnico, puedes:

1. **Revisar** los comentarios en el código
2. **Modificar** las variables CSS
3. **Agregar** nuevas funcionalidades en JavaScript
4. **Consultar** la documentación de las librerías utilizadas

## 🎨 Librerías Utilizadas

- **Font Awesome** - Iconos
- **Google Fonts** - Tipografías
- **CSS Grid & Flexbox** - Layouts
- **Vanilla JavaScript** - Funcionalidad

## 📄 Licencia

Este template es de uso libre para proyectos personales y comerciales.

---

**¡Disfruta creando tu portfolio artístico! 🎨✨**
