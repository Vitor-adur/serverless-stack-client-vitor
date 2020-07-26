export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_51Gze72AdyQwnaJAHJnrrymX2o9mYmtdRKbbV1xX1yXp5Dsz8UBRAKePEIW2EhiCDSeeW5DLby5HonUZuAKRSgwVw007QP1a7gg",
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-uploads-vitor"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://sdcsvxjpzh.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_i7WxuUslb",
      APP_CLIENT_ID: "74vj490ghne5didl8kfeu19m74",
      IDENTITY_POOL_ID: "us-east-1:2087328d-75c5-4a88-8a4d-7c584e7a4ffa"
    }
  };