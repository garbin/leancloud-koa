module.exports = {
  port: 3000,
  debug: {
    request: {
      logger:{
        name: 'debug',
        streams:[{path:__dirname + '/../../storage/logs/debug.log'}],
      },
      options: {}
    }
  },
  cors: true,
  middlewares: __dirname + '/../app/middlewares',
  routers: __dirname + '/../app/routers/**/*',
  serve: {
    root: __dirname + '/../../storage/public',
  }
};