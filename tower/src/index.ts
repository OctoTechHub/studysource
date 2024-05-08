import express from 'express';

const app = express();
const port = 3000;

app.get('/namaste', (req, res) => {
  res.json({
    message: 'Welcome to Parul University',
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});