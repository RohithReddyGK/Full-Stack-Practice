const express = require('express');
const app = express();
// Middleware to log requests to the console
app.use((req, res, next) => {
console.log(`${req.method} request made to: ${req.url}`);
next();
});
// Middleware to parse JSON payloads
app.use(express.json());
// Root endpoint to return "Hello, Express!"
app.get('/', (req, res) => {
res.send('Hello, Express!');
});
// Sample in-memory data for products
let products = [
{ id: 1, name: 'Laptop', price: 1000 },
{ id: 2, name: 'Phone', price: 500 }
];
// GET /products: Returns a list of all products
app.get('/products', (req, res) => {
res.json(products);
});
// POST /products: Adds a new product
app.post('/products', (req, res) => {
const { name, price } = req.body;
if (!name || !price) {
return res.status(400).json({ message: 'Name and price are required' });
}
const newProduct = { id: products.length + 1, name, price };
products.push(newProduct);
res.status(201).json(newProduct);
});
// GET /products/:id: Returns details of a specific product
app.get('/products/:id', (req, res) => {
const product = products.find(p => p.id === parseInt(req.params.id));
if (!product) {
return res.status(404).json({ message: 'Product not found' });
}
res.json(product);
});
// PUT /products/:id: Updates an existing product
app.put('/products/:id', (req, res) => {
const product = products.find(p => p.id === parseInt(req.params.id));
if (!product) {
return res.status(404).json({ message: 'Product not found' });
}
const { name, price } = req.body;
if (!name || !price) {
return res.status(400).json({ message: 'Name and price are required' });
}
product.name = name;
product.price = price;
res.json(product);
});
// DELETE /products/:id: Deletes a product
app.delete('/products/:id', (req, res) => {
const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
if (productIndex === -1) {
return res.status(404).json({ message: 'Product not found' });
}
products.splice(productIndex, 1);
res.status(204).send();
});
// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});
