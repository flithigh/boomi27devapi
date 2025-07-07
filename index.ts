import express from 'express';

const app = express();
const port = 8080;

app.get('/apivistion', (req, res) => {
  res.send('API Version 1.0');
});

app.get('/appname', (req, res) => {
  res.send('Boomi27DevAPI');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
