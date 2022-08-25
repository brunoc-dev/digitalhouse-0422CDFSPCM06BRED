const express = require('express');
const path = require('path');

const indexRouter = require('./routes/index');

const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');
const apiRouter = require('./api/routes/index');
const app = express();

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.json());

app.use('/', indexRouter);
app.use('/movies', moviesRoutes);
app.use(genresRoutes);
app.use('/api', apiRouter);

app.listen('3001', () => console.log('Servidor rodando na porta 3001'));
