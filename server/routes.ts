import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { firstName, email, company, projectType, message } = req.body;
      
      // Basic validation
      if (!firstName || !email || !projectType) {
        return res.status(400).json({ 
          message: "Обязательные поля: имя, email и тип проекта" 
        });
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          message: "Некорректный email адрес" 
        });
      }

      // Here you could save to database if needed
      // For now, just return success
      res.status(200).json({ 
        message: "Сообщение успешно отправлено!" 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ 
        message: "Ошибка сервера. Попробуйте позже." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
