import { Router } from 'express';
import CognitoService from '../services/AuthService';

const router = Router();

router.post('/login', async (req, res) => {
  CognitoService.login(req.body, function(err, result) {
    if (err) {
      return res.status(404).send(err);
    }

    res.send(result);
  });
});

router.post('/register', async (req, res) => {
  if(!req.body.social)
  {
    CognitoService.register(req.body, async function(err, result) {
      if (err) {
        return res.status(400).send(err);
      }
      const user = await req.context.models.User.create({
        username: result.username.toLowerCase(),
        first_name: req.body.given_name,
        last_name: req.body.family_name,
        email: req.body.email,
        user_type: 'aws',
      });
  
      res.send(user);
    });
  }else{
    const user = await req.context.models.User.create({
      username: req.body.username.toLowerCase(),
      first_name: req.body.given_name,
      last_name: req.body.family_name,
      email: req.body.email,
      user_type: 'aws_social',
    });
    return res.send(user)
  }
});

router.post('/confirm', async (req, res) => {
  CognitoService.confirmCode(req.body, function(err, result) {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

export default router;
