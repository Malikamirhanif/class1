import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class ApiawsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lambdaFun=new cdk.aws_lambda.Function(this,"lmFun",{
      functionName:"lmFun",
      runtime:cdk.aws_lambda.Runtime.NODEJS_16_X,
      code:cdk.aws_lambda.Code.fromAsset("Lambda"),
      handler:"index.handler"
    })
     const api= new cdk.aws_apigateway.LambdaRestApi(this,"lmRestApi",{
      handler:lambdaFun
     })

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'ApiawsQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
