// Load the SDK and UUID
var AWS = require('aws-sdk');

AWS.config.update({
  region: 'us-east-1',
});

// Create an S3 client
var s3 = new AWS.S3();

s3.listBuckets(function(err, data) {
   if (err) {
      console.log("Error", err);
   } else {
      console.log("Bucket List", data.Buckets);
   }
});

var bucketParams = {Bucket: "node-sdk-sample-6b638f68-3c80-4f94-a2f8-2d865014f30d"};

s3.getBucketAcl(bucketParams, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else if (data) {
    console.log("Success", data.Grants);
  }
});
