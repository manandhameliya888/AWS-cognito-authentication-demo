import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "",  // Enter The Pool ID From the AWS Cognito Pool into General Settings
    ClientId: ""   // Enter the Client ID from the AWS Cognito Pool into App Client
}

export default new CognitoUserPool(poolData);