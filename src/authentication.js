const {API_TOKEN} = require('./config');
const logger = require('./logger');

function validateBearerToken(req, res, next) {
  const apiToken = API_TOKEN;
  console.log(apiToken);
  const authToken = req.get('Authorization');
  console.log(authToken);
  
  if (!authToken || authToken.split(' ')[1] !== apiToken) {
    logger.error(`Unauthorized request to path: ${req.path}`);
    return res.status(401).json({ error: 'Unauthorized request' });
  }
  next();
}

module.exports = validateBearerToken;