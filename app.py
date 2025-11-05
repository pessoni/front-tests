from flask import Flask, render_template, jsonify
import os

app = Flask(__name__)

@app.route('/')
def index():
    """Página principal do aplicativo"""
    return render_template('index.html')

@app.route('/api/status')
def api_status():
    """Endpoint de API para verificar status"""
    return jsonify({
        'status': 'online',
        'version': '1.0.0',
        'message': 'Sistema operacional'
    })

@app.route('/about')
def about():
    """Página sobre o projeto"""
    return render_template('about.html')

@app.route('/dashboard')
def dashboard():
    """Dashboard com interface tecnológica"""
    return render_template('dashboard.html')

if __name__ == '__main__':
    # Configuração para desenvolvimento
    debug_mode = os.getenv('FLASK_DEBUG', 'True').lower() == 'true'
    port = 5001
    
    app.run(debug=debug_mode, host='0.0.0.0', port=port)