﻿/**
 * Created by FanTaSyLin on 2016/10/18.
 */

/// <reference path="./../typings/index.d.ts" />

(function () {

    'use strict';

    //加载配置
    var Config = require("./config.json");
    const HTTP_PORT = process.env.HTTP_PORT || 5002;
    //const MONGOOSE_URI = process.env.MONGOOSE_URI || "10.24.4.130/worldview";修改为27071端口 添加用户名和密码
    //替换为配置
    const MONGOOSE_URI = process.env.MONGOOSE_URI || Config.MongodbUrl;
    var debug = require('debug')('worldview-api');
    var morgan = require('morgan');
    var mongoose = require('mongoose');
    var RESTful = require('restify');
    var path = require('path');

    debug('Connect MongoDB');
    /* (function () {

     var opt_Mongoose = {
     server: {
     auto_reconnect: true,
     poolSize: 100
     }
     };

     mongoose.connect(MONGOOSE_URI, opt_Mongoose);

     mongoose.connection.on('error', function (err) {
     debug('Mongoose connection error: %s', err.stack);
     });

     mongoose.connection.on('open', function () {
     debug('Mongoose connected to the Worldview-Mongo');
     });

     mongoose.Promise = global.Promise;

     })();*/

    debug('Create RESTful Server');
    (function () {
        var server = RESTful.createServer({
            name: 'Worldview-API'
        });

        server.use(morgan("dev"));
        server.use(RESTful.queryParser());
        server.use(RESTful.bodyParser());
        server.use(RESTful.CORS());

        const BASEPATH = '/api';

        /**
         * 图层相关api
         */
         require('./routes/layer-handler.js')(server, BASEPATH);

        /**
         * 数据存在列表示例API
         */
           require('./routes/datalist-handler.js')(server, BASEPATH);

        /**
         * 调色板数据列表示例API
         */
        require('./routes/palette-handler.js')(server, BASEPATH);


        require('./routes/datainfo-handler.js')(server, BASEPATH);

        server.listen(HTTP_PORT, function () {
            debug('%s listening at %s ', server.name, server.url);
        });

    })();

})();