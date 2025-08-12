
// In-memory storage implementation
// This will be replaced with a proper database later

interface User {
  id: string;
  username: string;
  email: string;
  createdAt: Date;
}

interface Article {
  id: string;
  title: string;
  content: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
}

class InMemoryStorage {
  private users: User[] = [];
  private articles: Article[] = [];

  // User methods
  async createUser(userData: Omit<User, 'id' | 'createdAt'>): Promise<User> {
    const user: User = {
      id: Math.random().toString(36).substr(2, 9),
      ...userData,
      createdAt: new Date(),
    };
    this.users.push(user);
    return user;
  }

  async getUserById(id: string): Promise<User | null> {
    return this.users.find(user => user.id === id) || null;
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return this.users.find(user => user.email === email) || null;
  }

  async updateUser(id: string, updates: Partial<User>): Promise<User | null> {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) return null;

    this.users[userIndex] = { ...this.users[userIndex], ...updates };
    return this.users[userIndex];
  }

  async deleteUser(id: string): Promise<boolean> {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) return false;

    this.users.splice(userIndex, 1);
    return true;
  }

  // Article methods
  async createArticle(articleData: Omit<Article, 'id' | 'createdAt' | 'updatedAt'>): Promise<Article> {
    const article: Article = {
      id: Math.random().toString(36).substr(2, 9),
      ...articleData,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.articles.push(article);
    return article;
  }

  async getArticleById(id: string): Promise<Article | null> {
    return this.articles.find(article => article.id === id) || null;
  }

  async getAllArticles(): Promise<Article[]> {
    return [...this.articles];
  }

  async updateArticle(id: string, updates: Partial<Article>): Promise<Article | null> {
    const articleIndex = this.articles.findIndex(article => article.id === id);
    if (articleIndex === -1) return null;

    this.articles[articleIndex] = {
      ...this.articles[articleIndex],
      ...updates,
      updatedAt: new Date(),
    };
    return this.articles[articleIndex];
  }

  async deleteArticle(id: string): Promise<boolean> {
    const articleIndex = this.articles.findIndex(article => article.id === id);
    if (articleIndex === -1) return false;

    this.articles.splice(articleIndex, 1);
    return true;
  }
}

// Create and export a singleton instance
export const storage = new InMemoryStorage();
export type { User, Article };
