/**
 * Created by BlisS on 04/04/17.
 */
import express from 'express';
import path from 'path';
import open from 'open';
import config from '../webpack.config.dev';
import webpack from 'webpack';

/*eslint-disable no-console*/

const port = 8000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res){
  // Hard coding for simplicity. Pretend this is a real database
  res.json(
    [
      {"id":1, "firstName":"Bob", "lastName":"Smith","email":"bob@gmail.com"},
      {"id":2, "firstName":"Brendi", "lastName":"Lopez","email":"brendi@gmail.com"},
      {"id":3, "firstName":"BlisS", "lastName":"Norton","email":"imnotbatman@gmail.com"},
      {"id":4, "firstName":"Bruce", "lastName":"Wayne","email":"iambatman@gmail.com"}
    ]
  );
});

app.listen(port, function(err){
  if (err){
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
