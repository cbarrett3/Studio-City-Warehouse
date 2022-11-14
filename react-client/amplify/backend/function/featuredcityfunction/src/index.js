const awsServerlessExpress = require('aws-serverless-express');
const app = require('./app');

/**
 * @type {import('http').Server}
 */
const server = awsServerlessExpress.createServer(app);

/**
 * This is the entry point for the serverless function.
 * It is useful to proxy the path into an express app with routing.
 * Doing this gives you multiple routes in a single function as well
 * as multiple HTTP request methods like get, put, post, and delete
 * for each route. The serverless express framework being used is built
 * to do this, and the 'proxy' function handles this with boilerplate.
 *
 *
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

exports.handler = (event, context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  // here the event, context, and path are proxied to the express server running in app.js
  return awsServerlessExpress.proxy(server, event, context, 'PROMISE')
    .promise;
};
