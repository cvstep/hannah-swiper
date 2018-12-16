'use strict';
var dataProvider = require('../../../data/user/{userId}/ice.js');
/**
 * Operations on /user/{userId}/ice
 */
module.exports = {
    /**
     * summary: Get ICE form data by userId
     * description: 
     * parameters: userId
     * produces: application/json
     * responses: 200, default
     */
    get: function getICEForm(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
