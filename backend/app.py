from flask import Flask, request, jsonify  
from flask_cors import CORS

# Starting the flask app
app = Flask(__name__)
CORS(app)

# Temporary list for articles

articles = [
    {"id": 1, "title": "Flask ile Web Geliştirme", "content": "Flask, Python'da web geliştirme için..."},
    {"id": 2, "title": "Python'da Veri Analizi", "content": "Pandas kütüphanesi kullanarak..."},
    {"id": 3, "title": "JavaScript Temelleri", "content": "JavaScript, web'in temel dillerinden biridir..."},
    {"id": 4, "title": "CSS ile Responsive Tasarım", "content": "Responsive tasarım, farklı ekran boyutlarına..."},
    {"id": 5, "title": "Git ve Versiyon Kontrolü", "content": "Git, yazılım geliştirmede vazgeçilmez bir araçtır..."},
    {"id": 6, "title": "API Tasarımı", "content": "İyi bir API tasarımı, kullanıcı deneyimini artırır..."},
    {"id": 7, "title": "Veritabanı Optimizasyonu", "content": "Veritabanı performansını artırmak için..."},
    {"id": 8, "title": "Veritabanı Optimizasyonu", "content": "Veritabanı performansını artırmak için..."},
    {"id": 9, "title": "Veritabanı Optimizasyonu", "content": "Veritabanı performansını artırmak için..."},
    {"id": 10, "title": "Veritabanı Optimizasyonu", "content": "Veritabanı performansını artırmak için..."},
    {"id": 11, "title": "Veritabanı Optimizasyonu", "content": "Veritabanı performansını artırmak için..."},
    {"id": 12, "title": "Veritabanı Optimizasyonu", "content": "Veritabanı performansını artırmak için..."},
]

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/article', methods=['POST'])
def create_article():
    data = request.json

    if not data or 'title' not in data or 'content' not in data:
        return jsonify({"error": "Missing data!"}),400
    
    article = {
        "id" : len(articles) + 1,
        "title" : data['title'],
        "content" : data['content']
    }
    articles.append(article)

    return jsonify(article), 201

@app.route('/articles', methods=['GET'])
def get_articles() :
    page = request.args.get('page', 1, type=int)
    per_page = request.args.get('per_page', 6, type=int)
    start = (page - 1) * per_page
    end = start + per_page
    
    paginated_articles = articles[start:end]
    total_pages = -(-len(articles) // per_page)  # Ceiling division
    
    return jsonify({
        'articles': paginated_articles,
        'total_pages': total_pages,
        'current_page': page
    }), 200

@app.route('/articles/<int:article_id>', methods=['GET'])
def get_article(article_id):
    article = next((article for article in articles if article['id'] == article_id), None)
    if article:
        return jsonify(article), 200
    return jsonify({"error": "The article is not found"}), 404

@app.route('/article/<int:article_id>', methods=['PUT'])
def update_article(article_id):
    article = next((article for article in articles if article['id'] == article_id), None)

    if not article:
        return jsonify({"error" : "The article is not found"}), 404
    
    data = request.json

    if not data:
        return jsonify({"error" : "There is no data for updating"}), 400
    
    article['title'] = data.get('title', article['title'])
    article['content'] = data.get('content', article['content'])

    return jsonify(article), 200

@app.route('/article/<int:article_id>', methods=['DELETE'])
def delete_article(article_id):
    global articles
    article = next((article for article in articles if article['id'] == article_id), None)

    if not article:
        return jsonify({"error" : "The article is not found"}), 404
    
    articles = [article for article in articles if article['id'] != article_id]
    return jsonify({"message" : "The article is deleted successfully"}), 200

if __name__ == '__main__':
    app.run(debug=True)
