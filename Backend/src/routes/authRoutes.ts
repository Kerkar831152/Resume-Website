import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required",
            });
        }

        if (email !== process.env.ADMIN_EMAIL) {
            return res.status(401).json({
                message: "Invalid credentials",
            });
        }

        const passwordMatch = await bcrypt.compare(
            password,
            process.env.ADMIN_PASSWORD_HASH!
        );

        if (!passwordMatch) {
            return res.status(401).json({
                message: "Invalid credentials",
            });
        }

        const token = jwt.sign(
            { role: "admin" },
            process.env.JWT_SECRET!,
            { expiresIn: "1h" }
        );

        res.json({
            message: "Login successful",
            token,
        });

    } catch (error) {
        console.error("Login error:", error);

        res.status(500).json({
            message: "Server error",
        });
    }
});

export default router;