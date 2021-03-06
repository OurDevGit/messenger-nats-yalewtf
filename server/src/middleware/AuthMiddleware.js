import CognitoExpress from 'cognito-express';
import CognitoService from '../services/AuthService';

const cognitoExpress = new CognitoExpress({
  region: process.env.AWS_REGION,
  cognitoUserPoolId: process.env.AWS_POOL_ID,
  tokenUse: 'id',
  tokenExpiration: 3600000 * 24 * 7, // 7 days
});

export const isAuthenticated = (paths = []) => (req, res, next) => {
  const accessTokenFromClient = req.headers.authorization;
  const [, cPath] = req.path.split('/');
  if (paths.includes(cPath)) {
    if (!accessTokenFromClient) {
      return res
        .status(401)
        .send({ error: 'Access Token missing from header' });
    }

    cognitoExpress.validate(accessTokenFromClient, async function(
      err,
      response,
    ) {
      if (err) {
        return res.status(401).send(err);
      }
      const { context } = req;
      const { email } = response;

      if (context && email) {
        const { models } = context;
        const user = await models.User.findByEmail(email);

        if (user) {
          req.context = {
            models,
            currentUser: user,
            authorized: response,
          };
        } else {
          return res
            .status(401)
            .send({ error: 'User does not exist!' });
        }
        next();
      } else {
        return res
          .status(401)
          .send({ error: 'Something went wrong!' });
      }
    });
  } else {
    next();
  }
};
