import type { Request, Response } from "express";
import Project from "../models/Project.js";

const getProjects = async (req: Request, res: Response) => {
    try {
        const projects = await Project.find();

        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch projects",
            error
        });
    }
};

const createProject = async (req: Request, res: Response) => {
    try {
        const project = await Project.create(req.body);

        res.status(201).json(project);
    } catch (error) {
        res.status(500).json({
            message: "Failed to create project",
            error
        });
    }
};

const updateProject = async (req: Request, res: Response) => {
    try {
        const project = await Project.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!project) {
            return res.status(404).json({
                message: "Project not found"
            });
        }

        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({
            message: "Failed to update project",
            error
        });
    }
};

const deleteProject = async (req: Request, res: Response) => {
    try {
        const project = await Project.findByIdAndDelete(req.params.id);

        if (!project) {
            return res.status(404).json({
                message: "Project not found"
            });
        }

        res.status(200).json({
            message: "Project deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to delete project",
            error
        });
    }
};

export {
    getProjects,
    createProject,
    updateProject,
    deleteProject
};