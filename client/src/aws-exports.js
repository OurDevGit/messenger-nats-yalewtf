const aws_config = {
    region: process.env.REACT_APP_AWS_REGION,
    identityPoolRegion: process.env.REACT_APP_AWS_REGION,
    userPoolId: process.env.REACT_APP_AWS_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_AWS_CLIENT_ID,
    oauth: {
      domain: process.env.REACT_APP_AWS_POOL_DOMAIN,
      redirectSignIn: process.env.REACT_APP_AWS_POOL_CALLBACK_URL,
      // redirectSignOut: 'http://localhost:3001/',
      responseType: 'token', // or 'token', note that REFRESH token will only be generated when the responseType is code
      // grant_type:"authorization_code",
      scope: ["email", "profile"]
    }
}

export default aws_config
  