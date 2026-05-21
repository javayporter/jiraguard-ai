export type JiraTicket = {
    ticketType: string;
    title: string;
    description: string;
    warnings: string[];
    blockers: string[];
}