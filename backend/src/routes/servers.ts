import { Router } from "express";
import {client} from "../app.js";
import {Server} from "../types/server.js";

const EXPIRATION_TIME = 3600;

const router = Router();

router.post('/servers/update-server', async (req, res) => {
    try {
        let data: Server = req.body;
        await client.setEx(data.id, EXPIRATION_TIME, JSON.stringify(data));

        res.status(200).json({ message: "OK" });
    } catch (err) {
        console.error(err);
        res.status(500);
    }
});

router.get('/servers/get-servers', async (req, res) => {
    try {
        let keys = await client.keys('*');
        let result = [];

        for (const id of keys) {
            let value = await client.get(id);
            result.push(value);
        }

        res.status(200).json({ message: "OK", data: result });
    } catch (err) {
        console.error(err);
        res.status(500);
    }
});

router.delete('/servers/delete-server', async (req, res) => {
    try {
        let data: Server = req.body;
        await client.del(data.id);

        res.status(200).json({ message: "OK" });
    } catch (err) {
        console.error(err);
        res.status(500);
    }
});

export default router;