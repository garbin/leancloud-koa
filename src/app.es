import Koapi, {Model} from '/work/koapi/src/koapi'
import config from 'config'
import require_all from 'require-all'
import _ from 'lodash';
import path from 'path';
import fs from 'fs-extra';
import {storage} from './lib/helper';

// init knex and bookshelf
Model.init(config.knex);

const app  = new Koapi();

var server = app.run(Object.assign({
  middlewares: require('./middlewares'),

  routers: _.values(require_all({
    dirname: __dirname + '/routers',
    filter :  /(.+)\.(js|es)$/
  })).map(router=>router.default),

  error:[{ path: storage('/logs/error.log') }],

  accesslog: {
    options:{
      name: 'access',
      streams: [ {path:storage('/logs/access.log')} ]
    }
  },

  serve: {
    root: storage('/public'),
  }
}, config));

export default app;
export {server};
