import { Router } from 'express';
import NATS from 'nats';

const router = Router();

console.log('======>', process.env.NATS_URL);

const nc = NATS.connect({
  url: process.env.NATS_URL,
  json: true,
});

nc.subscribe('user.typing', msg => {
  nc.publish(`messages.${msg.subscriber}.typing`, {
    user: msg.name,
    type: msg.type,
  });
});

router.get('/', async (req, res) => {
  const messages = await req.context.models.Message.findAll();
  return res.send(messages);
});

router.get('/:messageId', async (req, res) => {
  const message = await req.context.models.Message.findByPk(
    req.params.messageId,
  );
  return res.send(message);
});

router.get('/:pub/:sub', async (req, res) => {
  try {
    const messages = await req.context.models.Message.findPrevMessages(
      req.params.pub,
      req.params.sub,
    );
    return res.send(messages);
  } catch (error) {
    res.status(404).send({ error: 'bad request' });
  }
});

router.post('/', async (req, res) => {
  const { message, publisher, subscriber } = req.body;
  try {
    const newMsg = await req.context.models.Message.create({
      message,
      publisher,
      subscriber,
      userId: req.context.currentUser.id,
    });

    nc.publish(`messages.${subscriber}`, newMsg);
    return res.send(newMsg);
  } catch (error) {
    res.status(404).send({ error: 'bad request' });
  }
});

router.delete('/:messageId', async (req, res) => {
  const result = await req.context.models.Message.destroy({
    where: { id: req.params.messageId },
  });

  return res.send(true);
});

export default router;
