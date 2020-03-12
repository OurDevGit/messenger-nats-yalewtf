import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import NodeFetch from 'node-fetch';
import { isAuthenticated } from './middleware/AuthMiddleware';
import { useModel } from './middleware/useModles';
import { sequelize } from './models';
import routes from './routes';

global.fetch = NodeFetch;
global.navigator = () => null;

const app = express();

// Application-Level Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(useModel);
/**
 * isAuthenticated should be used after useModel
 */
app.use(isAuthenticated(['users', 'messages']));

// Routes
app.use('/auth', routes.auth);
app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);

// Start
export default () => {
  sequelize.sync().then(async () => {
    app.listen(process.env.API_PORT || 5050, () =>
      console.log(
        `APIs listening on port ${process.env.API_PORT || 5050}!`,
      ),
    );
  });
};
