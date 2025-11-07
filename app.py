from flask import Flask, render_template, request
from flask_restx import Api, Resource, fields
import os
import requests

# Configuração da aplicação Flask
app = Flask(__name__)
app.config['RESTX_MASK_SWAGGER'] = False

# Configuração da API com Swagger
api = Api(
    app, 
    version='1.0.0',
    title='TechApp API',
    description='API do sistema TechApp com documentação Swagger integrada',
    doc='/docs/'
)

# Namespaces para organizar endpoints
ns_system = api.namespace('system', description='Endpoints do sistema')
ns_integration = api.namespace('integration', description='Endpoints de integração')

# Modelos para documentação Swagger
status_model = api.model('Status', {
    'status': fields.String(required=True, description='Status do sistema', example='online'),
    'version': fields.String(required=True, description='Versão da aplicação', example='1.0.0'),
    'message': fields.String(required=True, description='Mensagem do sistema', example='Sistema operacional')
})

integration_response_model = api.model('IntegrationResponse', {
    'message': fields.String(required=True, description='Mensagem de resposta', example='OK!'),
    'status': fields.String(required=True, description='Status da operação', example='success'),
    'endpoint': fields.String(required=True, description='Endpoint acessado', example='/')
})

integration_request_model = api.model('IntegrationRequest', {
    'data': fields.Raw(description='Dados da integração'),
    'type': fields.String(description='Tipo de integração', example='webhook')
})

# Endpoints da API com documentação Swagger
@ns_system.route('/status')
class StatusAPI(Resource):
    @ns_system.doc('get_system_status')
    @ns_system.marshal_with(status_model)
    def get(self):
        """Verificar status do sistema
        
        Retorna informações sobre o status atual do sistema,
        incluindo versão e estado operacional.
        """
        return {
            'status': 'online',
            'version': '1.0.0',
            'message': 'Sistema operacional'
        }
    def post(self):
        """Verificar status do sistema
        
        Retorna informações sobre o status atual do sistema,
        incluindo versão e estado operacional.
        """
        return {
            'status': 'online',
            'version': '1.0.0',
            'message': 'Sistema operacional'
        }

@ns_integration.route('/')
class IntegrationAPI(Resource):
    @ns_integration.doc('integration_endpoint')
    @ns_integration.expect(integration_request_model, validate=False)
    @ns_integration.marshal_with(integration_response_model)
    def post(self):
        """Endpoint de integração
        
        Processa requisições de integração e retorna confirmação.
        Aceita dados em formato JSON para processamento.
        """
        data = request.get_json() if request.is_json else {}
        print(f"request: {data}")
        
        return {
            'message': 'OK!',
            'status': 'success',
            'endpoint': '/integration'
        }
    def get(self):
        """Endpoint de integração
        
        Processa requisições de integração e retorna confirmação.
        Aceita dados em formato JSON para processamento.
        """
        data = request.get_json() if request.is_json else {}
        print(f"request: {data}")
        
        return {
            'message': 'OK!',
            'status': 'success',
            'endpoint': '/integration'
        }

# Rotas das páginas web (fora da API)
@app.route('/', methods=['GET', 'POST'])
def root2():
    data = request.get_json() if request.is_json else {}
    print(f"request: {data}")
    return {
        'message': 'OK! Rota default',
        'status': 'success',
        'endpoint': '/'
    }

@app.route('/index')
def index():
    """Página principal do aplicativo"""
    return render_template('index.html')


@app.route('/dfMessenger')
def dfMessenger():
    return render_template('dfMessenger.html')

@app.route('/about')
def about():
    """Página sobre o projeto"""
    return render_template('about.html')

@app.route('/dashboard')
def dashboard():
    """Dashboard com interface tecnológica"""
    return render_template('dashboard.html')

@app.route('/api-docs')
def api_docs():
    """Página de documentação da API"""
    return render_template('api_docs.html')

if __name__ == '__main__':
    # Configuração para desenvolvimento
    debug_mode = os.getenv('FLASK_DEBUG', 'True').lower() == 'true'
    port = 5001
    
    app.run(debug=debug_mode, host='0.0.0.0', port=port)