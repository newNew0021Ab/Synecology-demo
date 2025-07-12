
import { z } from "zod";

// User schemas
export const UserSchema = z.object({
  id: z.string(),
  username: z.string().min(3).max(50),
  createdAt: z.date(),
});

export const CreateUserSchema = z.object({
  username: z.string().min(3).max(50),
  password: z.string().min(6),
});

export const LoginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

// Contact form schema
export const ContactFormSchema = z.object({
  name: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  email: z.string().email("Введите корректный email"),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, "Сообщение должно содержать минимум 10 символов"),
});

export type User = z.infer<typeof UserSchema>;
export type CreateUser = z.infer<typeof CreateUserSchema>;
export type Login = z.infer<typeof LoginSchema>;
export type ContactForm = z.infer<typeof ContactFormSchema>;
