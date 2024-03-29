const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');
const enforce = require('express-sslify');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const port = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());
app.use(compression());
app.use(enforce.HTTPS({ trustProtoHeader: true }));

//serve static files
app.use(
  express.static(path.join(__dirname, 'client/build'), { maxAge: '1 year' })
);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port, (error) => {
  if (error) throw error;
  console.log('server is running on port', port);
});

app.get('/service-worker', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'service-worker.js'));
});

app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    description: 'Testing Payment',
    currency: 'inr',
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});
