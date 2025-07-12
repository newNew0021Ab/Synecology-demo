interface User {
  id: string;
  username: string;
  password: string;
  createdAt: Date;
}

class InMemoryStorage {
  private users: User[] = [];

  async insertUser(user: Omit<User, 'id' | 'createdAt'>): Promise<User> {
    const newUser: User = {
      ...user,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date(),
    };
    this.users.push(newUser);
    return newUser;
  }

  async getUserByUsername(username: string): Promise<User | null> {
    return this.users.find(user => user.username === username) || null;
  }

  async getUserById(id: string): Promise<User | null> {
    return this.users.find(user => user.id === id) || null;
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
}

export const storage = new InMemoryStorage();