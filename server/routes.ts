import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Directus proxy endpoint for case studies
  app.get("/api/directus-cases", async (req, res) => {
    try {
      const directusUrl = "https://directus-production-6ce1.up.railway.app/items/case_studies?fields=*";

      console.log('Proxying request to Directus:', directusUrl);

      const response = await fetch(directusUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      console.log('Directus response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Directus error response:', errorText);
        return res.status(500).json({
          status: 500,
          message: `Directus API error: ${response.status} - ${errorText.substring(0, 200)}`
        });
      }

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const responseText = await response.text();
        console.error('Non-JSON response from Directus:', responseText.substring(0, 300));
        return res.status(500).json({
          status: 500,
          message: `Expected JSON from Directus but received ${contentType}: ${responseText.substring(0, 100)}`
        });
      }

      const data = await response.json();
      console.log('Successfully fetched from Directus, data length:', data?.data?.length || 0);

      // Return the data as-is from Directus
      res.status(200).json(data);
    } catch (error) {
      console.error("Directus proxy error:", error);
      res.status(500).json({
        status: 500,
        message: `Proxy error: ${error.message || 'Unknown error'}`
      });
    }
  });

  // Directus proxy endpoint for blog posts
  app.get("/api/directus-blog", async (req, res) => {
    try {
      const directusUrl = "https://directus-production-6ce1.up.railway.app/items/blog-posts?fields=*";

      console.log('Proxying request to Directus:', directusUrl);

      const response = await fetch(directusUrl, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      console.log('Directus response status:', response.status);
      console.log('Directus response headers:', Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Directus error response:', errorText);
        
        let errorData;
        try {
          errorData = JSON.parse(errorText);
        } catch {
          errorData = { message: errorText };
        }
        
        return res.status(response.status).json({
          status: response.status,
          message: `Directus API error: ${response.status} - ${JSON.stringify(errorData)}`
        });
      }

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const responseText = await response.text();
        console.error('Expected JSON but received:', contentType, responseText.substring(0, 300));
        return res.status(500).json({
          status: 500,
          message: `Expected JSON but received ${contentType}. Response: ${responseText.substring(0, 100)}...`
        });
      }

      let data;
      try {
        const responseText = await response.text();
        data = JSON.parse(responseText);
        console.log('Successfully fetched from Directus, blog posts length:', data?.data?.length || 0);
      } catch (parseError) {
        console.log('JSON parse error:', parseError);
        return res.status(500).json({
          status: 500,
          message: `JSON parse error: ${parseError instanceof Error ? parseError.message : 'Unknown parse error'}`
        });
      }

      // Return the data as-is from Directus
      res.status(200).json(data);
    } catch (error) {
      console.error("Directus blog proxy error:", error);
      res.status(500).json({
        status: 500,
        message: `Proxy error: ${error instanceof Error ? error.message : 'Unknown error'}`
      });
    }
  });

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