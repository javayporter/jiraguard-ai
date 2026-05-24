import OpenAI from "openai";

// Create OpenAI client
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// Create reusable function
export async function generateJiraTicket(request:string) {
    const response = await client.responses.create({
        model: "gpt-5.3-mini",
        input: [
            {
                role: "system",
                content: `You are a Jira ticket generator. Return structured JSON only with ticketType, title, description, warnings, blockers`,
            },
            {
                role: "user",
                content: request
            }
        ]
    });

    return response.output_text;
}

// Function accepts request text

// Function sends:
//   - instructions
//   - user request

// Function returns AI output