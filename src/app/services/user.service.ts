import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Workout } from '../models/workout.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User | null = null;
  private readonly storageKey = 'userData';

  constructor() { 
    if (typeof window !== 'undefined' && localStorage.getItem(this.storageKey)) {
      const savedData = localStorage.getItem(this.storageKey);
      this.user = savedData ? JSON.parse(savedData) : null;
    }
  }

  private saveToLocalStorage(): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.storageKey, JSON.stringify(this.user));
    }
  }

  setUsername(username: string): void {
    if (!this.user) {
      this.user = { username, workouts: [] };
    } else {
      this.user.username = username;
    }
    this.saveToLocalStorage();
  }

  addWorkouts(workout: Omit<Workout, 'date'>): void {
    if (this.user) {
      this.user.workouts.push({ ...workout, date: new Date() });
      this.saveToLocalStorage();
    }
  }

  getUser(): User | null {
    return this.user;
  }
}
