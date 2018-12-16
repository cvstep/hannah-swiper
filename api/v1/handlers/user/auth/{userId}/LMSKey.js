'use strict';
var dataProvider = require('../../../../data/user/auth/{userId}/LMSKey.js');
/**
 * Operations on /user/auth/{userId}/LMSKey
 */
module.exports = {
    /**
     * summary: Get encrypted LMS logon key by userId
     * description: This endpoint returns the encrypted logon key for the LMS given the userId. Example psuedo code for creating the link:
```
GetTopClassLoginURL(int PID)
  string login_url = &#34;&#34;;
    using (WebClient client = new WebClient())
      string url = &#34;$API_HOST$/user/&#39; + PID.ToString() + &#39;/auth/LMSKey&#34;);
      login_url = @&#34;http://54.89.109.25/topclass/login.do?uid=&#34; + client.DownloadString(url);
      login_url = login_url.Replace(&#34;\&#34;&#34;, string.Empty);
  return login_url;
```

     * parameters: userId
     * produces: application/json
     * responses: 200, default
     */
    get: function getLMSKey(req, res, next) {
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
