const dev =  {
  STRIPE_KEY: "sk_test_phfu332w0yb0ZZWpjPfz0BNy00T7qzfIk5",
  s3: {
    REGION: "us-east-1",
    BUCKET: "phaasnote-app-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://kn8wn3trdh.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_M6CJ5A7bm",
    APP_CLIENT_ID: "15ebjjmfl9uaqn9lnm9tdkojk8",
    IDENTITY_POOL_ID: "us-east-1:9636a1b3-5ee4-42d3-b6d6-84c49403221b"
  }
}
const prod = {
  STRIPE_KEY: "sk_test_phfu332w0yb0ZZWpjPfz0BNy00T7qzfIk5",
    s3: {
      REGION: "us-east-1",
      BUCKET: "phaasnote-app-uploads"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://kn8wn3trdh.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_M6CJ5A7bm",
      APP_CLIENT_ID: "15ebjjmfl9uaqn9lnm9tdkojk8",
      IDENTITY_POOL_ID: "us-east-1:9636a1b3-5ee4-42d3-b6d6-84c49403221b"
    }
}
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

  export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
  };