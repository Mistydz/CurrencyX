require('dotenv').config();

const validateKey = (req, res, next) => {

    let host =  req.headers.host;
    let api_key = req.query.api_key;


    if (api_key == process.env.API_KEY && host == (process.env.HOST)) {
      //good match
    next();
    } else {
      //stop and respond
      res.status(403).send({ error: { code: 403, message: 'Your not allowed to call this api.' } });
    }
  };
  
  module.exports = { validateKey };
