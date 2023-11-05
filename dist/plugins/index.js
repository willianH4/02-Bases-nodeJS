"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpClientPlugin = exports.getUuid = exports.getAge = void 0;
var get_age_plugin_1 = require("./get-age.plugin");
Object.defineProperty(exports, "getAge", { enumerable: true, get: function () { return get_age_plugin_1.getAge; } });
var get_uuid_plugin_1 = require("./get-uuid.plugin");
Object.defineProperty(exports, "getUuid", { enumerable: true, get: function () { return get_uuid_plugin_1.getUuid; } });
var http_client_plugin_1 = require("./http-client.plugin");
Object.defineProperty(exports, "httpClientPlugin", { enumerable: true, get: function () { return http_client_plugin_1.httpClientPlugin; } });
