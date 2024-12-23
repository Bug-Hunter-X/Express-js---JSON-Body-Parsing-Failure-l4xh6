const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  console.log(req.body);
  if(Object.keys(req.body).length === 0){ //Check if req.body is empty
    return res.status(400).send({ error: 'Missing or Invalid JSON Body' });
  }
  res.send('User created');
});
app.listen(3000, () => console.log('Server listening on port 3000'));