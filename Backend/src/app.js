const express = require('express')
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors');
 
const app = express()
// Middleware to serve static files from the 'public' directory
 const corsOption = {
  origin: https://code-review-l5qj.vercel.app/ ,
  methods: ["GET" , "POST" , "PUT" , "DELETE"] ,
  allowedHeader : ["Content-Type", "Authorization"],
 };
app.use(cors(corsOption));
 app.get('/', (req, res) => {
     res.send('Hello World!')
 })

app.use(express.json());

app.use('/ai' , aiRoutes);

module.exports = app

