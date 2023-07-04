const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

let forms = [];
let formId = 1;

// Routes
app.get('/', (req, res) => {
  res.render('index', { forms });
});

app.get('/form-builder', (req, res) => {
  res.render('formBuilder');
});

app.post('/form-builder', (req, res) => {
  const { fields, formName } = req.body;
  const form = {
    id: formId++,
    name: formName,
    submissions: 0,
    fields: JSON.parse(fields),
  };
  forms.push(form);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
