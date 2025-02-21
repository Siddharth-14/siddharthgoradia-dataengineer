import { z } from "zod";

// Message Schema
export const insertMessageSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required")
});

export type Message = {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: Date;
};

export type InsertMessage = z.infer<typeof insertMessageSchema>;

// Experience Type
export type Experience = {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  icon: string;
  startDate: Date;
  endDate: Date | null;
  createdAt: Date;
};

// Education Type
export type Education = {
  id: number;
  degree: string;
  school: string;
  period: string;
  description: string;
  startDate: Date;
  endDate: Date | null;
  createdAt: Date;
};

// Project Type
export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  createdAt: Date;
};


// Placeholder insert schemas (These will need proper implementation if needed)
export const insertExperienceSchema = z.object({});
export const insertEducationSchema = z.object({});
export const insertProjectSchema = z.object({});

export type InsertExperience = z.infer<typeof insertExperienceSchema>;
export type InsertEducation = z.infer<typeof insertEducationSchema>;
export type InsertProject = z.infer<typeof insertProjectSchema>;