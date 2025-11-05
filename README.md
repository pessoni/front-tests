# TechApp - Sistema Web Avançado

Uma aplicação web moderna desenvolvida com Python Flask, apresentando um frontend estático com design tecnológico e tema escuro profissional.

## 🚀 Características

- **Design Tecnológico**: Interface moderna com tema escuro e cores vibrantes
- **Frontend Responsivo**: Adaptável para desktop, tablet e mobile
- **API RESTful**: Endpoints para status e monitoramento
- **Dashboard Interativo**: Métricas em tempo real e controles do sistema
- **Performance Otimizada**: Carregamento rápido e animações suaves

## 🛠️ Stack Tecnológica

### Backend
- **Python 3.8+**
- **Flask 2.3.3** - Framework web minimalista
- **Werkzeug 2.3.7** - WSGI toolkit

### Frontend
- **HTML5** - Estrutura semântica
- **CSS3** - Estilização avançada com Grid/Flexbox
- **JavaScript ES6+** - Interatividade moderna
- **Google Fonts** - Tipografia (Inter)

### Design System
- **Cores Base**: `#1a1a1a`, `#2d2d2d`, `#3d3d3d`
- **Cores de Destaque**: 
  - Azul elétrico: `#00d4ff`
  - Verde neon: `#00ff88`
  - Roxo: `#8b5cf6`
  - Laranja: `#ff6b35`

## 📁 Estrutura do Projeto

```
front-tests/
├── app.py                 # Aplicação Flask principal
├── requirements.txt       # Dependências Python
├── static/
│   ├── css/
│   │   ├── style.css     # Estilos principais
│   │   └── dashboard.css # Estilos do dashboard
│   └── js/
│       ├── main.js       # JavaScript principal
│       └── dashboard.js  # Scripts do dashboard
├── templates/
│   ├── index.html        # Página inicial
│   ├── about.html        # Página sobre
│   └── dashboard.html    # Dashboard
└── .github/
    └── copilot-instructions.md
```

## 🚀 Instalação e Execução

### 1. Pré-requisitos
- Python 3.8 ou superior
- pip (gerenciador de pacotes Python)

### 2. Configuração do Ambiente

```bash
# Clonar/baixar o projeto
cd front-tests

# Criar ambiente virtual (recomendado)
python -m venv .venv

# Ativar ambiente virtual
# Linux/Mac:
source .venv/bin/activate
# Windows:
.venv\Scripts\activate

# Instalar dependências
pip install -r requirements.txt
```

### 3. Executar a Aplicação

```bash
# Método 1: Execução direta
python app.py

# Método 2: Com variável de ambiente personalizada
PORT=5001 python app.py

# Método 3: Usando Flask CLI
export FLASK_APP=app.py
export FLASK_DEBUG=true
flask run --port=5001
```

### 4. Acessar a Aplicação

Abra o navegador e acesse:
- **Página Principal**: http://localhost:5001
- **Dashboard**: http://localhost:5001/dashboard
- **Sobre**: http://localhost:5001/about
- **API Status**: http://localhost:5001/api/status

## 📱 Páginas e Funcionalidades

### 🏠 Página Principal (`/`)
- Hero section com call-to-actions
- Grid de funcionalidades
- Painel de status do sistema
- Animações e efeitos visuais

### 📊 Dashboard (`/dashboard`)
- Métricas em tempo real
- Gráficos interativos
- Status dos serviços
- Log de atividades
- Painel de controle com botões funcionais

### ℹ️ Página Sobre (`/about`)
- Informações técnicas
- Stack tecnológica
- Características do sistema
- Detalhes de desenvolvimento

### 🔌 API Endpoints
- `GET /api/status` - Status do sistema em JSON

## ⌨️ Atalhos do Teclado

### Dashboard
- `Ctrl+R` - Atualizar métricas
- `Ctrl+E` - Exportar dados
- `Ctrl+T` - Verificar sistema

### Easter Eggs
- **Código Konami**: ↑↑↓↓←→←→BA (ativa efeito especial)

## 🎨 Personalização

### Cores
Todas as cores estão definidas em variáveis CSS no arquivo `static/css/style.css`:

```css
:root {
    --bg-primary: #1a1a1a;
    --accent-blue: #00d4ff;
    --accent-green: #00ff88;
    /* ... outras cores */
}
```

### Responsividade
O design é totalmente responsivo com breakpoints:
- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: até 767px

## 🔧 Configuração Avançada

### Variáveis de Ambiente
- `FLASK_DEBUG`: Ativa modo debug (padrão: True)
- `PORT`: Porta do servidor (padrão: 5000)

### Produção
Para ambiente de produção, use um servidor WSGI como Gunicorn:

```bash
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:8000 app:app
```

## 📈 Performance

- **Carregamento inicial**: < 3 segundos
- **Otimizações CSS**: Minificação e cache
- **JavaScript**: Carregamento assíncrono
- **Imagens**: Lazy loading e compressão

## 🛡️ Segurança

- Headers de segurança configurados
- Validação de inputs
- Prevenção XSS/CSRF
- HTTPS recomendado em produção

## 🧪 Desenvolvimento

### Executar em Modo Debug
```bash
export FLASK_DEBUG=true
python app.py
```

### Estrutura de Desenvolvimento
- Use ambiente virtual para isolamento
- Siga PEP 8 para código Python
- Mantenha CSS organizado em módulos
- Documente funções JavaScript

## 📝 Changelog

### v1.0.0 (2025-11-05)
- ✨ Implementação inicial
- 🎨 Design tecnológico completo
- 📊 Dashboard interativo
- 🔌 API de status
- 📱 Design responsivo
- ⚡ Otimizações de performance

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Suporte

Para dúvidas, problemas ou sugestões:
- Abra uma issue no repositório
- Consulte a documentação técnica
- Verifique os logs da aplicação

---

**TechApp** - Desenvolvido com ⚡ e ❤️ usando tecnologias modernas.