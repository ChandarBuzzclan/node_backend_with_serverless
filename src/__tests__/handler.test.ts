
import { hello }  from '../function/handler';
describe('hello function', () => {
  test('should return a 200 status code and a success message', async () => {
    const event = {}; 
    const response = await hello(event);
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined();
    const responseBody = JSON.parse(response.body);
    expect(responseBody.message).toBe('Go Serverless v3.0! Your function executed successfully!');
    expect(responseBody.input).toEqual(event);
  });
});
