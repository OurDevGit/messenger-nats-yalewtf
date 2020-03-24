import e from 'express';

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
  
  const codeDeliveryDetails = new AmazonCognitoIdentity.CodeDeliveryDetails(
    {
      AttributeName: "email",
      DeliveryMedium: "EMAIL",
      Destination: email,
    }
  )
  const userData = {
    Username: email,
    Pool: userPool,
  };

  const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function(result) {
      const accesstoken = result.getAccessToken().getJwtToken();
      const refreshtoken = result.getRefreshToken().getToken();
      // var verificationCode = prompt('Please input verification code' ,'');
      // cognitoUser.sendMFACode(verificationCode, this, 'SOFTWARE_TOKEN_MFA');
      // callback(null, { accesstoken, refreshtoken });
      // cognitoUser.setDeviceStatusRemembered({
      //   onSuccess: function(result) {
      //     callback(null, { accesstoken, refreshtoken });
      //   },
      //   onFailure: function(err){
      //     callback(err)
      //   }
      // })
      // cognitoUser.listDevices(10, null, {
      //   onSuccess: function(result){
      //     callback(null, result)
      //   }
      // })

      cognitoUser.getDevice({
        onSuccess: function(result){
          callback(null, { accesstoken, refreshtoken });
        },
        onFailure: function(error){
          cognitoUser.listDevices(10, null, {
            onSuccess: function(result){
              callback(null, result.Devices)
              if(result.Devices.length >0)
              {
                callback(error)
              }else{
                cognitoUser.setDeviceStatusRemembered({
                  onSuccess: function(result) {
                    callback(null, { accesstoken, refreshtoken });
                  },
                  onFailure: function(err){
                    callback(err)
                  }
                })
              }
            }
          })
        }
      })
      
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

const emailAvailable = (body, callback) =>{
  const {email} =  body;
  const userData = {
    Username: email,
    Pool: userPool,
  };
  var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
  cognitoUser.getUserData(function(err, result){
    if (err) {
      callback(err);
      return;
    }
    callback(null, result);
  }, { bypassCache: true })
}

const resetpass = (body, callback) =>{
  const {email} =  body;
  const userData = {
    Username: email,
    Pool: userPool,
  };
  var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
  cognitoUser.forgotPassword({
    onSuccess: function(result){
      const Sentemail = email
      callback(null, {Sentemail})
    },
    onFailure: function(err){
      callback(err)
    }
  })
}

const confirmpass = (body, callback) =>{
  const {email, verificationCode, newPassword} =  body;
  const userData = {
    Username: email,
    Pool: userPool,
  };
  var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
  cognitoUser.confirmPassword(verificationCode, newPassword, {
    onSuccess: function(result){
      callback(null, result)
    },
    onFailure: function(err){
      callback(err)
    }
  })
}

const signout = (body) =>{
  const {email} =  body;
  const userData = {
    Username: email,
    Pool: userPool,
  };
  var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
  cognitoUser.signOut();
}

export default {
  register,
  login,
  confirmCode,
  resetpass,
  confirmpass,
  emailAvailable,
  signout
};
