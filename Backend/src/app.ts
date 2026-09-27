import express from "express";
import projectRoutes from "./routes/projectRoutes.js";

const app = express();

app.use(express.json());

app.use("/api/projects", projectRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Resume backend is running"
    });
});

export default app;