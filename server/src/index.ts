import express from "express";
import cors from "cors";
import jiraRoutes from "./routes//jira.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", jiraRoutes);

app.listen(3001, () => {
    console.log("Server running on port 3001");
});