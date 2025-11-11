const express = require('express')
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors');
 
const app = express()
// Middleware to serve static files from the 'public' directory
 
app.use(cors());
 app.get('/', (req, res) => {
     res.send('Hello World!')
 })

app.use(express.json());

app.use('/ai' , aiRoutes);

module.exports = app
