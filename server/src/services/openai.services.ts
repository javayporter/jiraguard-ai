import OpenAI from "openai";

// Create OpenAI client
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// Create reusable function
export async function generateJiraTicket(request:string) {
    const response = await client.responses.create({
        model: "gpt-4o-mini",
        input: [
            {
                role: "system",
                content: `You are a Jira ticket generator. Return structured JSON only with ticketType, title, description, warnings, blockers`,
            },
            {
                role: "user",
                content: request
            },    
        ],
        text: {
            format: {
                type: "json_schema",
                name: "jira_ticket", 
                schema: {
                    type: "object",
                    additionalProperties: false,
                    properties:  {
                        ticketType: {
                            type: "string",
                            enum: ["Task,", "Bug", "Feature", "Import", "Export"]
                        },
                        title: { type: "string"},
                        description: { type: "string"},
                        warnings: {
                            type: "array",
                            items: { type: "string"}
                        },
                        blockers: {
                            type: "array",
                            items: { type: "string"}
                        }
                    },
                    required: ["ticketType", "title", "description", "warnings", "blockers"]
                }, 
            }
        }
    });

    return JSON.parse(response.output_text);
}

// Function accepts request text

// Function sends:
//   - instructions
//   - user request

// Function returns AI output