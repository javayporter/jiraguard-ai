import { z } from "zod";

export const jiraTickeSchema = z.object({
    ticketType: z.string(),
    title: z.string(),
    description: z.string(),
    warnings: z.array(z.string()),
    blockers: z.array(z.string())
})

