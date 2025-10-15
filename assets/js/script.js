// Função para scroll suave para seções
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Função para abrir WhatsApp com mensagem pré-preenchida
function agendar() {
    const phoneNumber = '5511999999999';
    const message = encodeURIComponent('Olá! Gostaria de agendar um horário na Barbearia Monarca.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
}

// Animação de scroll para revelar elementos
function revealOnScroll() {
    const cards = document.querySelectorAll('.service-card, .testimonial-card, .feature-item');
    
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const cardBottom = card.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        if (cardTop < windowHeight * 0.85 && cardBottom > 0) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
}

// Inicializar animações quando a página carregar
window.addEventListener('load', () => {
    // Configurar estado inicial dos elementos animados
    const cards = document.querySelectorAll('.service-card, .testimonial-card, .feature-item');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Revelar elementos ao rolar
    revealOnScroll();
});

// Adicionar listener para scroll
window.addEventListener('scroll', revealOnScroll);

// Parallax effect para o hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection && scrolled < window.innerHeight) {
        heroSection.style.backgroundPositionY = scrolled * 0.5 + 'px';
    }
});

// Smooth scroll para todos os links internos
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
});