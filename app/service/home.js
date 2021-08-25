'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
    async user() {
        return {
            name: 'jj',
            age: 18
        }
    }
}

module.exports = HomeService;

