from app import app
import unittest
import json

class FlaskTest(unittest.TestCase):

    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True

    def test_home_status_code(self):
        response = self.app.get('/')
        self.assertEqual(response.status_code, 200)
    
    def test_create_article(self):
        payload = json.dumps({
            "title": "Test Article",
            "content": "This is a test article"
        })
        response = self.app.post('/article', data=payload, content_type='application/json')
        self.assertEqual(response.status_code, 201)
        data = json.loads(response.data)
        self.assertEqual(data['title'], "Test Article")
    
    def test_get_articles(self):
        response = self.app.get('/articles')
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data)
        self.assertIsInstance(data, list)

if __name__ == "__main__":
    unittest.main()