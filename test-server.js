/*  important!!!
 *  npm install connect
 */

var connect = require('connect');
connect().use(connect.static(__dirname)).listen(8081);
