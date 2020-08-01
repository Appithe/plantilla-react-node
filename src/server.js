import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webPackConfig from '../webpack.config';

// initialaizing packages
const app = express();

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(webpackDevMiddleware(webpack(webPackConfig)));

// routes
app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/api', (req, res) => {
    res.json({api: 'Works!'});
})

// start server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});
