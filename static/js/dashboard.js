// Dashboard JavaScript - Funcionalidades específicas

document.addEventListener('DOMContentLoaded', function() {
    initializeDashboard();
});

function initializeDashboard() {
    console.log('📊 Dashboard inicializado');
    
    // Iniciar animações das métricas
    animateMetrics();
    
    // Atualizar métricas periodicamente
    setInterval(updateMetrics, 5000);
    
    // Animar gráficos
    animateCharts();
    
    // Simular dados em tempo real
    startRealTimeUpdates();
}

// Animação inicial das métricas
function animateMetrics() {
    const metrics = document.querySelectorAll('.metric-value');
    
    metrics.forEach((metric, index) => {
        const finalValue = metric.textContent;
        metric.textContent = '0';
        
        setTimeout(() => {
            animateCounter(metric, finalValue);
        }, index * 200);
    });
}

// Animação de contador
function animateCounter(element, target) {
    const isPercentage = target.includes('%');
    const isKilo = target.includes('k');
    const numericTarget = parseFloat(target.replace(/[^\d.]/g, ''));
    
    let current = 0;
    const increment = numericTarget / 50;
    const timer = setInterval(() => {
        current += increment;
        
        if (current >= numericTarget) {
            current = numericTarget;
            clearInterval(timer);
        }
        
        let displayValue = Math.floor(current);
        
        if (isKilo) {
            displayValue = (current / 1000).toFixed(1) + 'k';
        } else if (isPercentage) {
            displayValue = current.toFixed(1) + '%';
        } else if (target.includes(',')) {
            displayValue = displayValue.toLocaleString();
        }
        
        element.textContent = displayValue;
    }, 20);
}

// Atualizar métricas com dados simulados
function updateMetrics() {
    const metricsData = generateMockMetrics();
    
    Object.keys(metricsData).forEach(metricId => {
        const element = document.getElementById(metricId);
        if (element) {
            element.textContent = metricsData[metricId];
            element.classList.add('loading-metric');
            
            setTimeout(() => {
                element.classList.remove('loading-metric');
            }, 300);
        }
    });
}

// Gerar dados simulados para métricas
function generateMockMetrics() {
    return {
        'performance-metric': (95 + Math.random() * 5).toFixed(1) + '%',
        'users-metric': Math.floor(1200 + Math.random() * 100).toLocaleString(),
        'requests-metric': (2.0 + Math.random() * 1).toFixed(1) + 'k',
        'uptime-metric': (99.8 + Math.random() * 0.2).toFixed(1) + '%'
    };
}

// Animar barras do gráfico
function animateCharts() {
    const bars = document.querySelectorAll('.chart-bar');
    
    bars.forEach((bar, index) => {
        setTimeout(() => {
            bar.style.opacity = '1';
            bar.style.transform = 'scaleY(1)';
        }, index * 100);
    });
}

// Atualizações em tempo real
function startRealTimeUpdates() {
    setInterval(() => {
        updateTrafficChart();
        updateActivityLog();
    }, 3000);
}

// Atualizar gráfico de tráfego
function updateTrafficChart() {
    const bars = document.querySelectorAll('.chart-bar');
    
    bars.forEach(bar => {
        const newHeight = Math.floor(Math.random() * 80) + 20;
        bar.style.height = newHeight + '%';
    });
}

// Atualizar log de atividades
function updateActivityLog() {
    const activities = [
        'Cache otimizado automaticamente',
        'Backup executado com sucesso',
        'Novo usuário conectado',
        'Performance melhorada',
        'Sistema de monitoramento ativo',
        'Dados sincronizados',
        'Verificação de segurança completa'
    ];
    
    const types = ['success', 'info', 'warning'];
    const icons = ['✓', 'ℹ', '⚠'];
    
    // Adicionar nova atividade ocasionalmente
    if (Math.random() < 0.3) {
        const activityLog = document.querySelector('.activity-log');
        const now = new Date();
        const time = now.getHours().toString().padStart(2, '0') + ':' + 
                    now.getMinutes().toString().padStart(2, '0');
        
        const randomActivity = activities[Math.floor(Math.random() * activities.length)];
        const randomType = types[Math.floor(Math.random() * types.length)];
        const randomIcon = icons[types.indexOf(randomType)];
        
        const newActivity = document.createElement('div');
        newActivity.className = 'activity-item';
        newActivity.innerHTML = `
            <div class="activity-time">${time}</div>
            <div class="activity-content">
                <span class="activity-type ${randomType}">${randomIcon}</span>
                ${randomActivity}
            </div>
        `;
        
        // Adicionar no topo e remover antigas se necessário
        activityLog.insertBefore(newActivity, activityLog.firstChild);
        
        const items = activityLog.querySelectorAll('.activity-item');
        if (items.length > 6) {
            activityLog.removeChild(items[items.length - 1]);
        }
        
        // Animar entrada
        newActivity.style.opacity = '0';
        newActivity.style.transform = 'translateX(-20px)';
        setTimeout(() => {
            newActivity.style.transition = 'all 0.3s ease';
            newActivity.style.opacity = '1';
            newActivity.style.transform = 'translateX(0)';
        }, 100);
    }
}

// Funções dos botões de controle
function refreshMetrics() {
    showNotification('Métricas atualizadas com sucesso', 'success');
    updateMetrics();
    
    // Animar botão
    const btn = event.target.closest('.control-btn');
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        btn.style.transform = '';
    }, 150);
}

function clearCache() {
    showNotification('Cache limpo com sucesso', 'info');
    
    // Simular limpeza
    setTimeout(() => {
        showNotification('Performance otimizada após limpeza', 'success');
    }, 2000);
}

function exportData() {
    showNotification('Preparando exportação de dados...', 'info');
    
    // Simular exportação
    setTimeout(() => {
        const data = {
            timestamp: new Date().toISOString(),
            metrics: generateMockMetrics(),
            services: getServicesStatus()
        };
        
        const blob = new Blob([JSON.stringify(data, null, 2)], 
                            { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `dashboard-data-${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);
        
        showNotification('Dados exportados com sucesso', 'success');
    }, 1500);
}

function systemCheck() {
    showNotification('Iniciando verificação do sistema...', 'info');
    
    // Simular verificação
    const checks = [
        'Verificando conectividade...',
        'Testando performance...',
        'Validando segurança...',
        'Checando integridade dos dados...'
    ];
    
    checks.forEach((check, index) => {
        setTimeout(() => {
            showNotification(check, 'info');
        }, index * 1000);
    });
    
    setTimeout(() => {
        showNotification('Sistema verificado - Tudo funcionando corretamente!', 'success');
    }, checks.length * 1000);
}

// Obter status dos serviços
function getServicesStatus() {
    const services = document.querySelectorAll('.service-item');
    const status = {};
    
    services.forEach(service => {
        const name = service.querySelector('.service-name').textContent;
        const statusElement = service.querySelector('.service-status');
        status[name] = statusElement.textContent;
    });
    
    return status;
}

// Função para simular falhas ocasionais
function simulateSystemEvents() {
    setInterval(() => {
        if (Math.random() < 0.1) { // 10% chance
            const services = document.querySelectorAll('.service-status');
            const randomService = services[Math.floor(Math.random() * services.length)];
            
            // Simular degradação temporária
            const originalClass = randomService.className;
            const originalText = randomService.textContent;
            
            randomService.className = 'service-status status-warning';
            randomService.textContent = 'Degraded';
            
            setTimeout(() => {
                randomService.className = originalClass;
                randomService.textContent = originalText;
            }, 5000);
        }
    }, 30000); // A cada 30 segundos
}

// Inicializar eventos do sistema
setTimeout(simulateSystemEvents, 10000);

// Keyboard shortcuts para dashboard
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey) {
        switch(e.key) {
            case 'r':
                e.preventDefault();
                refreshMetrics();
                break;
            case 'e':
                e.preventDefault();
                exportData();
                break;
            case 't':
                e.preventDefault();
                systemCheck();
                break;
        }
    }
});

console.log('⌨️ Atalhos do Dashboard: Ctrl+R (atualizar), Ctrl+E (exportar), Ctrl+T (verificar)');