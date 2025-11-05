// Principais funções da aplicação
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    console.log('🚀 TechApp inicializado');
    
    // Animações de entrada
    animateOnScroll();
    
    // Verificar status inicial após 2 segundos
    setTimeout(checkStatus, 2000);
    
    // Atualizar status a cada 30 segundos
    setInterval(checkStatus, 30000);
}

// Função para verificar status da API
async function checkStatus() {
    const statusDisplay = document.getElementById('status-display');
    
    if (!statusDisplay) return;
    
    // Mostrar loading
    statusDisplay.innerHTML = `
        <div class="loading-spinner"></div>
        <span>Verificando status...</span>
    `;
    
    try {
        const response = await fetch('/api/status');
        const data = await response.json();
        
        if (response.ok) {
            statusDisplay.innerHTML = `
                <div class="status-success">✅</div>
                <span style="color: var(--accent-green)">
                    ${data.message} - v${data.version}
                </span>
            `;
        } else {
            throw new Error('Status check failed');
        }
    } catch (error) {
        console.error('Erro ao verificar status:', error);
        statusDisplay.innerHTML = `
            <div class="status-error">❌</div>
            <span style="color: var(--accent-orange)">
                Erro ao conectar com o servidor
            </span>
        `;
    }
}

// Animações ao rolar a página
function animateOnScroll() {
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
    
    // Aplicar animação aos cards
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
}

// Função para navegação suave
function smoothScroll(targetId) {
    const target = document.getElementById(targetId);
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Sistema de notificações
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${getNotificationIcon(type)}</span>
            <span class="notification-message">${message}</span>
        </div>
    `;
    
    // Styles para a notificação
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: 12px;
        padding: 1rem 1.5rem;
        box-shadow: var(--shadow-card);
        z-index: 1000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        max-width: 350px;
    `;
    
    document.body.appendChild(notification);
    
    // Mostrar notificação
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover após 5 segundos
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

function getNotificationIcon(type) {
    const icons = {
        'info': 'ℹ️',
        'success': '✅',
        'warning': '⚠️',
        'error': '❌'
    };
    return icons[type] || icons['info'];
}

// Monitoramento de performance
function trackPerformance() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                const loadTime = Math.round(perfData.loadEventEnd - perfData.loadEventStart);
                
                console.log(`⚡ Página carregada em ${loadTime}ms`);
                
                if (loadTime > 3000) {
                    showNotification('Carregamento lento detectado', 'warning');
                }
            }, 0);
        });
    }
}

// Inicializar monitoramento
trackPerformance();

// Função para alternar tema (futuro)
function toggleTheme() {
    // Implementação futura para tema claro
    showNotification('Alternância de tema será implementada em breve', 'info');
}

// Detecção de modo offline
window.addEventListener('online', () => {
    showNotification('Conexão restaurada', 'success');
    checkStatus();
});

window.addEventListener('offline', () => {
    showNotification('Modo offline ativado', 'warning');
});

// Easter egg - Konami Code
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    konamiCode = konamiCode.slice(-konamiSequence.length);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        showNotification('🎮 Código Konami ativado! Você encontrou o easter egg!', 'success');
        document.body.style.animation = 'rainbow 2s ease-in-out';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 2000);
    }
});

// CSS para rainbow animation
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0%, 100% { filter: hue-rotate(0deg); }
        25% { filter: hue-rotate(90deg); }
        50% { filter: hue-rotate(180deg); }
        75% { filter: hue-rotate(270deg); }
    }
`;
document.head.appendChild(style);