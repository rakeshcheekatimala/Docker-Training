const express = require("express");
const redis = require("redis");
const PORT = 4000;

const app = express();
const client = redis.createClient({
  host: "redis-server",
  port: 6379 // default port number of redis
});
// host refers to the name of the docker server that is created in docker-compose file
// usually it can https://my-redis-server.com, etc.
client.set("visits", 0);

app.get("/", (req, res) => {
  client.get("visits", (err, visits) => {
    res.send("Number of visits is " + visits);
    client.set("visits", parseInt(visits) + 1);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
