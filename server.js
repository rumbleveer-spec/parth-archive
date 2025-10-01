const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Parth Archive - Cricketers Database</title>
            <style>
                body { font-family: Arial, sans-serif; max-width: 1200px; margin: 0 auto; padding: 20px; }
                h1 { color: #2c3e50; }
                .card { border: 1px solid #ddd; padding: 20px; margin: 10px 0; border-radius: 8px; }
            </style>
        </head>
        <body>
            <h1>🏏 Parth Archive - Cricketers Database</h1>
            <p>Complete database of international cricketers with stats and records</p>
            <div class="card">
                <h3>Features</h3>
                <ul>
                    <li>Player Profiles</li>
                    <li>Career Statistics</li>
                    <li>Records & Achievements</li>
                    <li>Search Functionality</li>
                </ul>
            </div>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(\`Server running on port \${PORT}\`);
});
