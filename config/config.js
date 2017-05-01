let path = require('path');

const SERVER_HOST = '172.18.99.234';
const SERVER_PORT = '3000';
const DATABASE_HOST = '172.18.99.234';
const DATABASE_PORT = '27017';
const DATABASE_NAME = 'task_manager';
const DATABASE_USER ='';
const DATABASE_PASSWORD = '';

let userAndPass = '';
if(DATABASE_USER !== '' && DATABASE_PASSWORD !== '') {
    userAndPass = DATABASE_USER + ':' + DATABASE_PASSWORD + '@';
}

const serverHost = 'http://' + SERVER_HOST + ':' + SERVER_PORT;
const dbUrl = 'mongodb://' + userAndPass + DATABASE_HOST + ':' + DATABASE_PORT + '/' + DATABASE_NAME;

let config = {
    serverHost,
    dbUrl,
    fileSuffixReg: /\.(png|jpg|svg|jpeg)$/i,
    uploadPath: path.join(__dirname, '..', 'dist', 'upload'),
}

module.exports = config;