const fs = require("fs");
const path = require("path");
const app = require("./app");

const routes = require("./routes");

app.all("*", (req, res, next) => {
  /* eslint-disable no-console */
  console.log(`Hitting ${req.method} API`, req.url, req.headers.host);
  next();
});

for (const route of getBaseRoutes()) {
  console.log("Route", route);
  app.use(`/${route}`, routes[`${route}Routes`]);
}

module.exports = {
  path: "nuxtapi/",
  handler: app,
};

function getBaseRoutes() {
  const source = path.join(__dirname, "./routes");
  return fs
    .readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => `${dirent.name}`);
}
