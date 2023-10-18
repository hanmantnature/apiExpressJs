const express = require('express');
const axios = require('axios');

const app = express();
const port = 4000; 
app.get('/api/getData', async (req, res) => {
  try {
    
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments', {
      params: {
        postId: 1,
      },
    });

   
    const data = response.data;

   
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
