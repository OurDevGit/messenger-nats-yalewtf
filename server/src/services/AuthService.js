const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const poolData = {
  UserPoolId: process.env.AWS_POOL_ID,
  ClientId: process.env.AWS_CLIENT_ID,
};

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

const userAttribute = obj =>
  new AmazonCognitoIdentity.CognitoUserAttribute(obj);

const register = (body, callback) => {
  const { email, family_name, given_name, password, username } = body;
  const attributeList = [];
  attributeList.push(
    userAttribute({
      Name: 'email',
      Value: email,
    }),
    userAttribute({
      Name: 'family_name',
      Value: family_name,
    }),
    userAttribute({
      Name: 'given_name',
      Value: given_name,
    }),
  );

  userPool.signUp(username, password, attributeList, null, function(
    err,
    result,
  ) {
    if (err) {
      callback(err);
    } else {
      const cognitoUser = result.user;
      callback(null, cognitoUser);
    }
  });
};

const login = (body, callback) => {
  const { email, password } = body;
  const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
    {
      Username: email,
      Password: password,
    },
  );

  const userData = {
    Username: email,
    Pool: userPool,
  };

  const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function(result) {
      const accesstoken = result.getAccessToken().getJwtToken();
      const refreshtoken = result.getRefreshToken().getToken();

      callback(null, { accesstoken, refreshtoken });
    },
    onFailure: function(err) {
      callback(err);
    },
  });
};

const confirmCode = (body, callback) => {
  const { code, email } = body;
  const userData = {
    Username: email,
    Pool: userPool,
  };

  var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
  cognitoUser.confirmRegistration(code, true, function(err, result) {
    if (err) {
      callback(err);
      return;
    }
    callback(null, result);
  });
};

export default {
  register,
  login,
  confirmCode,
};
