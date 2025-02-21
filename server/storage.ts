import { type Message, type InsertMessage } from "@shared/schema";

export interface IStorage {
  getMessages(): Promise<Message[]>;
  createMessage(message: InsertMessage): Promise<Message>;
}

class MemStorage implements IStorage {
  private messages: Message[] = [];
  private messageId = 1;

  async getMessages(): Promise<Message[]> {
    return this.messages;
  }

  async createMessage(message: InsertMessage): Promise<Message> {
    const newMessage = {
      id: this.messageId++,
      ...message,
      createdAt: new Date()
    };
    this.messages.push(newMessage);
    return newMessage;
  }
}

export const storage = new MemStorage();