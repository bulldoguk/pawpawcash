import { config } from "../../../../../config";
const axios = require("../../../axios/plaid");

module.exports = (req, res, next) => {
  const uri = 'link/token/create';
  console.log('uri', uri)
  console.log('body', req.body)
  axios
    .post(uri, req.body)
    .then((response) => {
      res.status(response.status).send(response.data);
    })
    .catch((error) => {
      /* eslint-disable no-console */
      if (error.response) {
        console.log(error.response)
        res.status(error.response.status).send(error.response.data);
      } else {
        res.status(500).send(error);
      }
    });
};
