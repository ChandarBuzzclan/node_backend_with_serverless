import middy from "@middy/core";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export const hello = middy<
  APIGatewayProxyEvent,
  APIGatewayProxyResult
>().handler(async (req: any, context: any) => {
  // The context type gets augmented here by the secretsManager middleware.
  // This is just an example, obviously don't ever log your secret in real life!

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello from `,
      req,
    }),
  };
});
