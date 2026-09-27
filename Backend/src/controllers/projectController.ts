import type { Request, Response } from "express";

const getProjects = (req: Request, res: Response) => {
    res.json({
        message: "Get all projects"
    });
};

const createProject = (req: Request, res: Response) => {
    res.json({
        message: "Project created"
    });
};

const updateProject = (req: Request, res: Response) => {
    res.json({
        message: "Project updated"
    });
};

const deleteProject = (req: Request, res: Response) => {
    res.json({
        message: "Project deleted"
    });
};

export {
    getProjects,
    createProject,
    updateProject,
    deleteProject
};

