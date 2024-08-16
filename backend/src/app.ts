import express from "express";
import {createClient, RedisClientType} from "redis";
import servers from "./routes/servers.js";

const PORT = 5000;
const REDIS_PORT = 6379;

export const client: RedisClientType = createClient({
    url: `redis://localhost:${REDIS_PORT}`,
});

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json());
app.use(servers);

async function initializeServer() {
    await client.connect();
}

initializeServer()
    .then()
    .catch((e) => console.error(e));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});