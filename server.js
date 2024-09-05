const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cors()); // Use cors middleware

app.post('/send-message', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Message Received:', { name, email, message });
    res.json({ success: true }); // Simulate successful operation
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});