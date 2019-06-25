import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfigDev from '../../webpack/webpack.dev'
import webpackConfigProd from '../../webpack/webpack.prod'

export default function webpackDevServer(app) {
    const env = (process.env.NODE_ENV || 'development').trim();

    const compiler = webpack(env==='production'? webpackConfigProd : webpackConfigDev);
    app.use(webpackDevMiddleware(compiler));

    app.set('env', env)

}
