const express = require('express');
const app = express();
const port = 3001;

// app.use(express.json());

// Sample GET route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// // Sample POST route
// app.post('/data', (req, res) => {
//     res.json({ message: 'Data received', data: req.body });
// });

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
