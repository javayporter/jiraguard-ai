import { Router } from "express";
import { generateJiraTicket } from "../services/openai.services";
import { error } from "node:console";

const router = Router();

router.post("/generate-ticket", async (req, res) =>{
    try {
        const { request } = req.body;

        if (!request || typeof request !== "string" || request.trim().length === 0) {
            return res.status(400).json({
                error: "Request text is required."
            });
        }

        const result = await generateJiraTicket(request);

        res.json({
            raw: result
        });
    } catch (err) {
        console.log("Error Returned", err)
        res.status(500).json({ error: "failed to generate ticket"})
    }
});

export default router;
