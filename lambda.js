import fastify from "fastify";
import app from "./app.js";
import awsLambdaFastify from "@fastify/aws-lambda";
const server = fastify({
  logger: true,
});
server.register(app);
export const handler = awsLambdaFastify(server);
await server.ready(); // needs to be placed after awsLambdaFastify call because of the decoration: https://github.com/fastify/aws-lambda-fastify/blob/master/index.js#L9`
