import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 5000;
// const mongoURL = '';

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/api/clients', (req, res) => {
  console.log('Dummy Endpoint');
  res.send('You have posted Something');
});

app.use(express.json());

// mongoose.connect(mongoURL, {});
