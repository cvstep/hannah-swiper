'use strict';
var dataProvider = require('../../../data/user/{userId}/orders.js');
/**
 * Operations on /user/{userId}/orders
 */
module.exports = {
    /**
     * summary: Create new order for userId
     * description: It includes the products ordered, the user data for
the product, if required. It also sends the payment, billing
and/or shipping information.

     * parameters: userId, orderData
     * produces: application/json
     * responses: 200, default
     */
    post: function postOrder(req, res, next) {
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
