import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: "Access denied",
        });
    }

   const token: string | undefined = authHeader.split(" ")[1];
   if (!token) {
    return res.status(401).json({
        message: "Invalid authorization format",
    });
   }

   try {
    jwt.verify(token, process.env.JWT_SECRET!);
    next();
    } catch (error) {
        return res.status(401).json({
            message: "Invalid or expired token",
        });
    }
};

export default authMiddleware;