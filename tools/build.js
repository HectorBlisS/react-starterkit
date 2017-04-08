/**
 * Created by BlisS on 07/04/17.
 */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';


process.env.NODE_ENV = 'production';

console.log("Generando el build para producción, tomará un momento...".blue);

webpack(webpackConfig).run((err, stats)=> {
  if(err) {
    console.log(err.red);
    return 1;
  }

  const jsonStats = stats.toJson();

  if(jsonStats.hasErrors) {
    return jsonStats.errors.map(error=> console.log(error.red));
  }

  if(jsonStats.hasWarnings) {
    console.log("Webpack generó los siguientes warnings: ".yellow);
    jsonStats.warnings.map(warning=> console.log(warning.yellow));
  }

  console.log(`Webpack stats: ${stats}`);

  // if we got this far, the build succeeded.
  console.log("Tu app se ha construido correctamente y colocado en dist! \(^-^)/".green);

  return 0;
});
