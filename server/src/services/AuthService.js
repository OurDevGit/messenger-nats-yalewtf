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

      // cognitoUser.getDevice({
      //   onSuccess: function(result){
      //     callback(null, { accesstoken, refreshtoken });
      //   },
      //   onFailure: function(error){
      //     cognitoUser.listDevices(10, null, {
      //       onSuccess: function(result){
      //         callback(null, { accesstoken, refreshtoken })
      //         // if(result.Devices.length >0)
      //         // {
      //         //   callback(error)
      //         // }else{
      //         //   cognitoUser.setDeviceStatusRemembered({
      //         //     onSuccess: function(result) {
      //         //       callback(null, { accesstoken, refreshtoken });
      //         //     },
      //         //     onFailure: function(err){
      //         //       callback(err)
      //         //     }
      //         //   })
      //         // }
      //       }
      //     })
      //   }
      // })
      
    },
    onFailure: function(err) {
      callback(err);
    },
  });
};

const confirmCode = (body, callback) => {
  const { verificationCode, email } = body;
  const userData = {
    Username: email,
    Pool: userPool,
  };

  var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
  cognitoUser.confirmRegistration(verificationCode, true, function(err, result) {
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
      // const email = email
      callback(null, {"email":email})
    },
    onFailure: function(err){
      callback(err)
    }
  })
}

const confirmpass = (body, callback) =>{
  const {email, verificationCode, newPassword, confirmType} =  body;
  
  if(confirmType === "resetpass"){
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
  }else if(confirmType === "register"){
    const { username } =  body;
    const userData = {
      Username: username,
      Pool: userPool,
    };
    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    cognitoUser.confirmRegistration(verificationCode, false, function(err, result)
      {
        if(err){
          callback(err);
          return
        }else{
          const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
            {
              Username: email,
              Password: newPassword,
            },
          );
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
        }
    })
  } 
}

const resendcode = (body, callback) =>{
  const {email, username} =  body;
  const userData = {
    Username: username,
    Pool: userPool,
  };
  var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
  cognitoUser.resendConfirmationCode(function(err, result){
    if(err){
      callback(err);
      return
    }
    callback(null, result)
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
  resendcode,
  emailAvailable,
  signout
};
