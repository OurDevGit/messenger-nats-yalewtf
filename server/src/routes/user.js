import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const { currentUser, models } = req.context;
  const users = await models.User.findAllUsers(currentUser.username);
  return res.send(users);
});

router.get('/:userId', async (req, res) => {
  const { userId } = req.params;
  if (userId === 'me') {
    res.send(req.context.currentUser);
  } else {
    const user = await req.context.models.User.findByPk(userId);
    return res.send(user);
  }
});

export default router;
