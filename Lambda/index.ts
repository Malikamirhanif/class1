
import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';/*APIGatewayProxyEvent is use to
to get the browser event value enetred in url because event of appsync is different from 
event of restapi similar is case with APIGatewayProxyResult but context is similar for both 
appsync and restapi */

export async function handler(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
 /*this handker will run when there will be an api call*/
    console.log("request:", event);
  console.log('context',context);


  return {
    statusCode: 200,/**/
    headers: { "Content-Type": "text/plain" },
    body: `Hello, CDK! You've hit ${event.path}\n`
  };
}
