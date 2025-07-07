import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/apivistion', (req, res) => {
  res.send('API Version 1.0');
});

app.get('/appname', (req, res) => {
  res.send('Boomi27DevAPI');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
