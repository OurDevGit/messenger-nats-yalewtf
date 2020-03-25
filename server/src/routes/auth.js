import { Router } from 'express';
import CognitoService from '../services/AuthService';

const router = Router();

router.post('/login', async (req, res) => {
  const bot = await req.context.models.User.findByUsername('rea');
  if(!bot){
    const bot = await req.context.models.User.create({
      username: 'rea',
      first_name: 'Rea',
      last_name: '',
      email: 'rea.bot.com',
      user_type: 'bot',
    });
  }
  CognitoService.login(req.body, function(err, result) {
    if (err) {
      return res.status(404).send(err);
    }

    res.send(result);
  });
});

router.post('/register', async (req, res) => {
  const bot = await req.context.models.User.findByUsername('rea');
  if(!bot){
    const bot = await req.context.models.User.create({
      username: 'rea',
      first_name: 'Rea',
      last_name: '',
      email: 'rea.bot.com',
      user_type: 'bot',
    });
  }
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
      user_type: 'aws_social'
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

router.post('/resetpass', async(req, res) => {
  const user = await req.context.models.User.findByUsername(req.body.username);
  if(user)
  {
      CognitoService.resetpass(req.body, function(err, result){
        if (err) {
          return res.status(404).send(err);
        }
        res.send(result);
      })
  }else{
    const err = {"message":"User doesn't exist."}
    return res.status(404).send(err);
  }
})

router.post('/confirmpass', async(req, res) => {
  CognitoService.confirmpass(req.body, function(err, result){
    if (err) {
      return res.status(404).send(err);
    }
    res.send(result);
  })
})

router.post('/signout', async(req, res) => {
  CognitoService.signout(req.body);
  return res.send({"message": "success"})
})

export default router;
