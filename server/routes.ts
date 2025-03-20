import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

// Contact form schema
const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10)
});

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate request body
      const formData = contactFormSchema.parse(req.body);
      
      // In a real app, you might send an email or store the message
      // For this simple portfolio, we'll just return success
      
      // Simulate processing delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Return success response
      res.status(200).json({ 
        success: true, 
        message: "Your message has been received. Thank you for reaching out!" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      }
      
      res.status(500).json({ 
        success: false, 
        message: "Failed to send message. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
