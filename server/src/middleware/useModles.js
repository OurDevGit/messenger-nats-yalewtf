import models from '../models';

export const useModel = (req, res, next) => {
  req.context = { models };
  next();
};
