const path = require('path');
const codegen = require('swagger-node-codegen');

codegen.generate({
  swagger: path.resolve(__dirname, './openapi.yaml'),
  target_dir: path.resolve(__dirname, '../my-api')
}).then(() => {
  console.log('Done!');
}).catch(err => {
  console.error(`Something went wrong: ${err.message}`);
});
