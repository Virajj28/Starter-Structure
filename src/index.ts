import express from 'express';
const app = express();
import 'dotenv/config';

const port = process.env.PORT || 3000;

app.get('/livecheck', (req, res) => {
    res.send('Service running!')
})

app.listen(port,() => {
    return console.log(`Server running on http://localhost:${port}`)
})