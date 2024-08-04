import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private API = `https://669a42819ba098ed61fef6ab.mockapi.io/users`;
  constructor() {}

  getUserDetailsById(id: string) {
    return fetch(
      `https://669a42819ba098ed61fef6ab.mockapi.io/users/${id}`
    ).then((res) => res.json());
  }

  async login(email: string, password: string): Promise<IUser | null> {
    const response = await fetch(
      `${this.API}?email=${email}&password=${password}`
    );
    const users = await response.json();
    if (users.length > 0) {
      return users[0]; // Assuming email and password are unique
    } else {
      throw new Error('Invalid email or password');
    }
  }
}
