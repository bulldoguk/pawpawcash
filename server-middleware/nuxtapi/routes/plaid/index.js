const { Router } = require("express");

const handlers = require("./handlers");

const router = Router();

for (const key of Object.keys(handlers)) {
  switch (key.substring(0, 2)) {
    case "ge":
      router.get(`/${key}*`, handlers[key]);
      break;
    case "pu":
      router.put(`/${key}*`, handlers[key]);
      break;
    case "po":
      router.post(`/${key}*`, handlers[key]);
      break;
    case "pa":
      router.patch(`/${key}*`, handlers[key]);
      break;
    default:
      console.log("Unknown verb");
      continue;
  }
}

module.exports = router;
