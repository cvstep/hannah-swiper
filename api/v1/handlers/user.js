'use strict';
var dataProvider = require('../data/user.js');
/**
 * Operations on /user
 */
module.exports = {
    /**
     * summary: Create new user
     * description: Creates new user. Perform necessary business operations like sending welcome email.

     * parameters: userForm
     * produces: application/json
     * responses: 200, default
     */
    post: function createuser(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['post']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
