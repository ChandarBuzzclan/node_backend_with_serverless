import { APIGatewayEvent } from 'aws-lambda';
import helloHandler from '../function/handler'; // Import the file containing your lambda handler
    const event: APIGatewayEvent = { queryStringParameters: null } as APIGatewayEvent;
    const result = await helloHandler(event);

    expect(result.statusCode).toBe(200);
    expect(result.headers?.['Content-Type']).toBe('application/json');

    const body = JSON.parse(result.body);
    expect(body.message).toBe('Hello World ');
  });
});
