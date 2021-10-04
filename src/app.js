import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import store from '../api/models/store.js';

const app = express();
const port = 5000;
const mongoURL = '';

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

app.get('/api/clients', (req, res) => {
  store.find({}, (err, docs) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(docs);
    }
  });
});

app.post('/api/clients', (req, res) => {
  //   console.log(req.body);
  let clientData = req.body;
  let mongoRecords = [];
  clientData.forEach((client) => {
    mongoRecords.push({
      firstName: client.firstName,
      phone: client.phone,
      address: client.address,
    });
  });
  store.create(mongoRecords, (err, records) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(records);
    }
  });
  //   res.send('You have posted Something');
});

app.delete('/api/clients', (req, res) => {
  store.deleteMany({}, (err) => {
    res.status(500).send(err);
  });
});

app.use(express.json());

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
