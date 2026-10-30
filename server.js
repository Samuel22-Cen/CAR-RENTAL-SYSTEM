const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/car-rental')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('DB Error:', err));

app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
console.log('Server running at http://localhost:' + PORT);
});
