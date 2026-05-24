import { Router } from "express";
import { generateJiraTicket } from "../services/openai.services";

const router = Router();

router.post("/generate-ticket", async (req, res) =>{
    try {
        const { request } = req.body;

        const result = await generateJiraTicket(request);

        res.json({
            raw: result
        });
    } catch (err) {
        res.status(500).json({ error: "failed to generate ticket"})
    }
});

export default router;
