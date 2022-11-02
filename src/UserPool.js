import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-1_uJNnl1mrm",
    ClientId: "7dmk01f31h83b171i240eghneq"
}

export default new CognitoUserPool(poolData);