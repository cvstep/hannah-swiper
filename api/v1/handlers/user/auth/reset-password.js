'use strict';
var dataProvider = require('../../../data/user/auth/reset-password.js');
/**
 * Operations on /user/auth/reset-password
 */
module.exports = {
    /**
     * summary: Start password reset process by user email.
     * description: 
     * parameters: resetForm
     * produces: application/json
     * responses: 200
     */
    post: function resetPassword(req, res, next) {
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
